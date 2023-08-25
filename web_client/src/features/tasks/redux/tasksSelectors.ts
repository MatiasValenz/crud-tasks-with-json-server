import {createSelector} from '@reduxjs/toolkit'
import {RootState} from "../../../store/store"
import {taskApi} from "../services/apiTask"
import {TaskInterface} from "../../../interfaces/taskInterface"
import {getDay} from "../../../utils/date/getDay"
import {getStatus} from "../utils/getStatus";
import {TaskState} from "../../../interfaces/taskState";

export const tasksSelected = (state: RootState) => state.tasks.tasksSelected
export const selectTaskResult = taskApi.endpoints.getTasks.select({})

const emptyTasks: TaskInterface[] = []

export const selectAllTasks = createSelector(
    selectTaskResult,
    (taskResult) => taskResult.data ?? emptyTasks
)

export const selectTaskWithStatus = createSelector(
    selectAllTasks,
    (taskResult) => taskResult.map((task: TaskInterface) => {
        return {
            ...task,
            status: getStatus({dueDate: task.dueDate, isComplete: task.isComplete})
        }
    })
)

//Filter by status
const statusPriority: Record<string, number> = {
    "Overdue": 1,
    "AlmostLate": 2,
    "Underway": 3,
    "Completed": 4
}

//Order by createdAt, dueDate and status
export const selectTasksOrder = createSelector(
    selectTaskWithStatus,
    (state: RootState) => state.tasks.ordenOption,
    (tasks: TaskInterface[], ordenOption: { order: string, orderBy: 'createdAt' | 'dueDate' | 'status' }) => {
        const newTasks = [...tasks]
        //Order by status (priority)
        if (ordenOption.orderBy === 'status') {
            return newTasks.sort((a, b) => statusPriority[a.status] - statusPriority[b.status])
        }
        //Order by createdAt or dueDate
        if (ordenOption.orderBy === 'createdAt' || ordenOption.orderBy === 'dueDate') {
            if (ordenOption.order === 'asc') {
                return newTasks.sort((a, b) => {
                    const aDay = getDay(a[ordenOption.orderBy])
                    const bDay = getDay(b[ordenOption.orderBy])
                    return aDay.diff(bDay, 'day')
                })
            } else {
                return newTasks.sort((a, b) => {
                    const aDay = getDay(a[ordenOption.orderBy])
                    const bDay = getDay(b[ordenOption.orderBy])
                    return bDay.diff(aDay, 'day')
                })
            }
        } else {
            return newTasks
        }
    }
)

// Filter by description, status and range date (dueDate and createdAt)
export const selectTasksOrderAndFilter = createSelector(
    selectTasksOrder,
    (state: RootState) => state.tasks.filterOption,
    (tasks: TaskInterface[], filterOption: TaskState["filterOption"]) => {
        const {status, dueDate, description} = filterOption
        const {from, to} = dueDate
        let filteredTasks = [...tasks]
        // Filter by status
        if (status !== "All") {
             filteredTasks = filteredTasks.filter((task) => task.status === status)
        }
        // Filter by dueDate
        if (from && to) {
            filteredTasks = filteredTasks.filter((task) => {
                const taskDueDate = getDay(task.dueDate)
                const fromDate = getDay(from).endOf('day')
                const toDate = getDay(to)
                return taskDueDate.isAfter(fromDate) && taskDueDate.isBefore(toDate)
            })
        }
        // Filter by description
        if (description.trim().length > 0) {
            filteredTasks = filteredTasks.filter((task) => task.description.toLowerCase().includes(description.toLowerCase()))
        }

        return filteredTasks
    }
)

export const filterOption = (state: RootState) => state.tasks.filterOption
export const selectOpenFilter = (state: RootState) => state.tasks.openFilter
