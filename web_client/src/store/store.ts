import {configureStore} from '@reduxjs/toolkit';
import {taskReducer} from "../features/tasks/redux/tasksSlice";
import {taskApi} from "../features/tasks/services/apiTask";


export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
