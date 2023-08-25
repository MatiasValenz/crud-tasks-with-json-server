import {useCreateTaskMutation} from "../services/apiTask";
import {useAppDispatch, useAppSelector} from "../../../hooks/useStore";
import {selectFormData} from "../redux/tasksSelectors";
import { v4 as uuidv4 } from "uuid";
import {clearFormData} from "../redux/tasksSlice";
import dayjs from "dayjs";

const useTaskCreate = () => {
    const dispatch = useAppDispatch()
    const [createTask, {isLoading}] = useCreateTaskMutation();
    const formData = useAppSelector(selectFormData)
    const {description, dueDate} = formData
    const newId = uuidv4()

    const createdAt = dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')

    // Create a new task object
    const newTask = {
        id: newId,
        description,
        dueDate,
        createdAt,
        isComplete: false,
    }
    const handleCreateTask = async () => {
        try {
            await createTask(newTask)
        } catch (err) {
            console.error(err)
        } finally {
            dispatch(clearFormData())
        }
    }

    return {
        handleCreateTask,
        isLoading,
    }
}

export default useTaskCreate
