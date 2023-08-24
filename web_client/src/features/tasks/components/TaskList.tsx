import React from 'react';
import TaskCard from "./taskCard/TaskCard";
import Grid from '@mui/material/Grid';
import {useGetTasksQuery} from "../services/apiTask";
import ErrorComponent from "../../../components/errorComponent/ErrorComponent";
import {useAppSelector} from "../../../hooks/useStore";
import {selectTasksOrderAndFilter} from "../redux/tasksSelectors";
import {TaskInterface} from "../../../interfaces/taskInterface";
import Skeleton from "../../../components/skeleton/Skeleton";

const TaskList = () => {
    const {error, isLoading} = useGetTasksQuery({})
    const sortedTasks = useAppSelector(state => selectTasksOrderAndFilter(state))

    if (isLoading) return <Skeleton/>
    if (error) return <ErrorComponent message={"Error al cargar las tareas"}/>

    return (
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            {sortedTasks.map((task: TaskInterface) => (
                <Grid item xs={12} key={task.id}>
                    <TaskCard
                        task={task}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default TaskList;
