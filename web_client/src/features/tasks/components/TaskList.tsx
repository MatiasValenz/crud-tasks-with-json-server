import React from 'react';
import TaskCard from "./taskCard/TaskCard";
import Grid from '@mui/material/Grid';
import {useDeleteTaskMutation, useGetTasksQuery} from "../services/apiTask";
import ErrorComponent from "../../../components/errorComponent/ErrorComponent";
import {useAppSelector} from "../../../hooks/useStore";
import {selectTasksOrderAndFilter} from "../redux/tasksSelectors";
import {TaskInterface} from "../../../interfaces/taskInterface";
import Skeleton from "../../../components/skeleton/Skeleton";
import DeleteIcon from "../../../components/icons/DeleteIcon";
import {red} from "@mui/material/colors";
import {IconButton} from "@mui/material";
import Info from "../../../components/info/Info";

const TaskList = () => {
    const {error, isLoading} = useGetTasksQuery({})
    const [deleteTask, {isLoading: isLoadingDelete}] = useDeleteTaskMutation();
    const sortedTasks = useAppSelector(state => selectTasksOrderAndFilter(state))

    const handleDeleteTask = (id: string) => {
        deleteTask(id)
    }

    if (isLoading) return <Skeleton/>
    if (error) return <ErrorComponent message={"Error al cargar las tareas"}/>
    if (sortedTasks.length === 0) return <Info
        message={"No hay tareas para mostrar, puede crear una nueva tarea presionando el botón (+)"}/>

    return (
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            {sortedTasks.map((task: TaskInterface) => (
                <Grid container item xs={12} spacing={1} key={task.id} justifyContent="center" alignItems="center">
                    <Grid item xs={11}>
                        <TaskCard
                            task={task}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton
                            onClick={() => handleDeleteTask(task.id)}
                            disabled={isLoadingDelete}
                        >
                            <DeleteIcon
                                width={24}
                                height={24}
                                color={red[500]}
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

export default TaskList;
