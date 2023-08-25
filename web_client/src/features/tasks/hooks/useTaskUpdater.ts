import React, {useState} from 'react';
import {useUpdateTaskMutation} from "../services/apiTask";

const useTaskUpdater = () => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateTask] = useUpdateTaskMutation();

    const handleUpdateDueDate = async (date: string, id: string) => {
        setIsUpdating(true);
        try {
            await updateTask({id, dueDate: date})
        } catch (error) {
            console.log(error);
        } finally {
            setIsUpdating(false);
        }
    }

    // actualizar estado a true de mas de una tarea
    const handleUpdateTaskStatus = async (ids: number[]) => {
        setIsUpdating(true);
        try {
            for (const id of ids) {
                await updateTask({id, isComplete: true})
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsUpdating(false);
        }
    }

    return {isUpdating, handleUpdateDueDate, handleUpdateTaskStatus};

};

export default useTaskUpdater;
