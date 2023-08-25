import React from 'react';
import TaskList from "./components/TaskList";
import {Box, Container, IconButton} from "@mui/material";
import UseTaskUpdater from "./hooks/useTaskUpdater";
import ButtonProgress from "../../components/buttonProgress/ButtonProgress";
import {useAppDispatch, useAppSelector} from "../../hooks/useStore";
import {
    clearTasksSelected,
    openFilter,
    closeFilter,
    setOrdenOption,
    clearFilterOption,
    setFormData, closeCreateTask
} from "./redux/tasksSlice";
import {selectFormData, selectOpenCreateTask, selectOpenFilter, tasksSelected} from "./redux/tasksSelectors";
import MenuOrder from "../../components/menu/Menu";
import Filters from "./components/filters/Filters";
import {blue} from "@mui/material/colors";
import FilterIcon from "../../components/icons/ClearIcon";
import TaskForm from "./components/taskForm/TaskForm";
import useTaskCreate from "./hooks/useTaskCreate";

const Tasks = () => {
    const dispatch = useAppDispatch()
    const tasksIds = useAppSelector(tasksSelected)
    const openFilterValue = useAppSelector(selectOpenFilter)
    const formData = useAppSelector(selectFormData)
    const openCreateTask = useAppSelector(selectOpenCreateTask)
    const {handleUpdateTaskStatus, isUpdating} = UseTaskUpdater()
    const {handleCreateTask, isLoading} = useTaskCreate()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        const field: "dueDate" | "description" = name as "dueDate" | "description";
        dispatch(setFormData({field, value}));
    }

    const handleUpdateStatus = () => {
        handleUpdateTaskStatus(tasksIds)
        dispatch(clearTasksSelected())
    }

    const handleChangeOrder = (order: { orderBy: string, order: string }) => {
        dispatch(setOrdenOption(order))
    }

    const handleOpenFilter = () => {
        dispatch(openFilter())
    }

    const handleCloseFilter = () => {
        dispatch(closeFilter())
    }

    const handleClearFilter = () => {
        dispatch(clearFilterOption())
    }

    const handleCloseCreateTask = () => {
        dispatch(closeCreateTask())
    }


    return (
        <Container component="main" maxWidth="md" sx={{marginBottom: 1}}>
            <h1>Cosas por hacer</h1>
            <Box sx={{display: 'flex', flexDirection: "column", gap: 1}}>
                <Box sx={{display: 'flex', gap: 1, justifyContent: 'space-between', alignItems: 'center'}}>
                    <ButtonProgress
                        text="Liberar seleccionadas"
                        onClick={handleUpdateStatus}
                        loading={isUpdating}
                        disabled={!(tasksIds.length > 0)}
                    />
                    <Box sx={{display: 'flex', gap: 1}}>
                        <MenuOrder
                            handleChangeOrder={handleChangeOrder}
                        />
                        <IconButton
                            onClick={openFilterValue ? handleCloseFilter : handleOpenFilter}
                        >
                            <FilterIcon
                                width={24}
                                height={24}
                                color={blue[500]}
                            />
                        </IconButton>
                    </Box>
                </Box>
                {openFilterValue &&
                  <Filters
                    clearFilter={handleClearFilter}
                  />
                }
                {openCreateTask &&
                  <TaskForm
                    data={formData}
                    onChange={handleChange}
                    onSubmit={handleCreateTask}
                    loading={isLoading}
                    close={handleCloseCreateTask}
                  />
                }
                <TaskList/>
            </Box>
        </Container>
    );
};

export default Tasks;
