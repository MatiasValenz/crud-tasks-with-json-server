import {createSlice} from "@reduxjs/toolkit";
import {TaskState} from "../../../interfaces/taskState";

const initialState: TaskState = {
    formData: {
        description: '',
        dueDate: '',
    },
    tasksSelected: [],
    ordenOption: {
        orderBy: 'createdAt', // Order initial
        order: 'desc',
    },
    filterOption: {
        status: "All",
        dueDate: {
            from: null,
            to: null,
        },
        createdAt: null,
        description: "",
    }
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.formData = action.payload;
        },
        setTasksSelected: (state, action) => {
            const {taskId, checked} = action.payload;
            if (checked) {
                state.tasksSelected.push(taskId);
            } else {
                state.tasksSelected = state.tasksSelected.filter((item) => item !== taskId);
            }
        },
        clearTasksSelected: (state) => {
            state.tasksSelected = [];
        },
        setOrdenOption: (state, action) => {
            state.ordenOption = action.payload;
        },
        setStatusOption: (state, action) => {
            state.filterOption.status = action.payload;
        },
        setDescriptionOption: (state, action) => {
            state.filterOption.description = action.payload;
        },
        setDueDateOption: (state, action) => {
            state.filterOption.dueDate = action.payload;
        }

    }
})

export const taskReducer = taskSlice.reducer;

export const {
    setFormData,
    setTasksSelected,
    clearTasksSelected,
    setOrdenOption,
    setStatusOption,
    setDescriptionOption,
    setDueDateOption
} = taskSlice.actions;


