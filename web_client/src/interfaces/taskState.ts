import {statusTypes} from "../types/statusTypes";

export interface TaskState {
    formData: {
        description: string,
        dueDate: string,
    },
    tasksSelected: number[],
    ordenOption: {
        orderBy: 'createdAt' | 'dueDate' | 'status',
        order: string,
    }
    filterOption: {
        status: statusTypes | "All",
        dueDate: {
            from: string | null,
            to: string | null,
        },
        createdAt: {
            from: string,
            to: string,
        } | null,
        description: string,

    }
}
