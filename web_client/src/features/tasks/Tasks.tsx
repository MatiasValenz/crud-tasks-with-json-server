import React from 'react';
import TaskList from "./components/TaskList";
import {Box, Container} from "@mui/material";

import UseTaskUpdater from "./hooks/useTaskUpdater";
import ButtonProgress from "../../components/buttonProgress/ButtonProgress";
import {useAppDispatch, useAppSelector} from "../../hooks/useStore";
import {clearTasksSelected, setOrdenOption} from "./redux/tasksSlice";
import {tasksSelected} from "./redux/tasksSelectors";
import MenuOrder from "../../components/menu/Menu";
import Filters from "./components/filters/Filters";

const Tasks = () => {
    const dispatch = useAppDispatch()
    const tasksIds = useAppSelector(tasksSelected)
    const {handleUpdateTaskStatus, isUpdating} = UseTaskUpdater()

    const handleUpdateStatus = () => {
        handleUpdateTaskStatus(tasksIds)
        dispatch(clearTasksSelected())
    }

    const handleChangeOrder = (order: {orderBy: string, order: string}) => {
        dispatch(setOrdenOption(order))
    }

    //Apply filters
    // const handleStatus = () => {}

    // Set status


    return (
        <Container component="main" maxWidth="md">
            <h1>Cosas por hacer</h1>
            <Box sx={{display: 'flex', flexDirection: "column", gap: 1}}>
                <Box sx={{display: 'flex',  gap: 1, justifyContent: 'space-between', alignItems: 'center'}}>
                    <ButtonProgress
                        text="Liberar seleccionadas"
                        onClick={handleUpdateStatus}
                        loading={isUpdating}
                        disabled={!(tasksIds.length > 0)}
                    />
                    <MenuOrder
                        handleChangeOrder={handleChangeOrder}
                    />
                  buton
                </Box>
                <Filters
                />
                <TaskList />
            </Box>
        </Container>
    );
};

export default Tasks;
