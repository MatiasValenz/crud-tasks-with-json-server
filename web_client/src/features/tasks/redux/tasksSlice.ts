import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskState} from "../../../interfaces/taskState";

const initialState: TaskState = {
    formData: {
        description: '',
        dueDate: '',
    },
    openCreateTask: false,
    tasksSelected: [],
    ordenOption: {
        orderBy: 'createdAt', // Order initial
        order: 'desc',
    },
    openFilter: false,
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
        setFormData: (state, action: PayloadAction<{ field: keyof TaskState["formData"]; value: string }>) => {
            const { field, value } = action.payload;
            if (field === "description" || field === "dueDate") {
                state.formData[field] = value;
            }
            state.formData[field] = value;
        },
        clearFormData: (state) => {
            state.formData = initialState.formData;
        },
        openCreateTask: (state) => {
            state.openCreateTask = true;
        },
        closeCreateTask: (state) => {
            state.openCreateTask = false;
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
        },
        clearFilterOption: (state) => {
            state.filterOption = initialState.filterOption;
        },
        openFilter: (state) => {
            state.openFilter = true;
        },
        closeFilter: (state) => {
            state.openFilter = false;
        }
    }
})

export const taskReducer = taskSlice.reducer;

export const {
    setFormData,
    clearFormData,
    openCreateTask,
    closeCreateTask,
    setTasksSelected,
    clearTasksSelected,
    setOrdenOption,
    setStatusOption,
    setDescriptionOption,
    setDueDateOption,
    clearFilterOption,
    openFilter,
    closeFilter
} = taskSlice.actions;


