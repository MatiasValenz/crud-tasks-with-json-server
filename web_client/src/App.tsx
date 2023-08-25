import React from 'react';
import './App.css';
import Tasks from "./features/tasks/Tasks";
import {Fab} from "@mui/material";
import AddIcon from "./components/icons/AddIcon";
import {openCreateTask} from "./features/tasks/redux/tasksSlice";
import {useAppDispatch} from "./hooks/useStore";

function App() {
    const dispatch = useAppDispatch()
    const handleOpenCreateTask = () => {
        dispatch(openCreateTask())
    }
  return (
    <div>
        <Tasks/>
        <Fab
            color="primary"
            sx={{position: 'fixed', bottom: 16, right: 16}}
            onClick={handleOpenCreateTask}
        >
            <AddIcon
                width={24}
                height={24}
                color="#ffffff"
            />
        </Fab>
    </div>
  );
}

export default App;
