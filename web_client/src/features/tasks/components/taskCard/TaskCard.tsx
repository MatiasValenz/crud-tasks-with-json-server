import React from 'react';
import {Box, Card, CardContent, CircularProgress, Typography, useTheme} from "@mui/material";
import DatePicker from "../../../../components/datePicker/DatePicker";
import UseTaskUpdater from "../../hooks/useTaskUpdater";
import WatchLaterIcon from "../../../../components/icons/WatchLaterIcon";
import AlarmIcon from "../../../../components/icons/AlarmIcon";
import CheckCircleIcon from "../../../../components/icons/CheckCircleIcon";
import HighlightIcon from "../../../../components/icons/HighlightIcon";
import CheckboxCustom from "../../../../components/checkboxCustom/CheckboxCustom";
import {useAppDispatch} from "../../../../hooks/useStore";
import {setTasksSelected} from "../../redux/tasksSlice";
import {blue, green, red, yellow} from "@mui/material/colors";
import {TaskInterface} from "../../../../interfaces/taskInterface";

interface TaskCardProps {
    task: TaskInterface
}

export const formaterDate = (date: string) => {
    return date.split("T")[0]
}

interface IconMap {
    [key: string]: React.ReactNode;
}

const getStatusIcon = (status: string): React.ReactNode => {
    const props = {
        width: 40,
        height: 40,
        color: "#ffffff"
    }
    const iconMap: IconMap = {
        "Completed": <CheckCircleIcon {...props}/>,
        "Overdue": <HighlightIcon {...props}/>,
        "Underway": <WatchLaterIcon {...props}/>,
        "AlmostLate": <AlarmIcon {...props}/>
    };

    return iconMap[status];
};

const colorIntensity = 400;

const colorByStatus: {[key: string]: string} = {
    Completed: blue[colorIntensity],
    Underway:  green[colorIntensity],
    AlmostLate: yellow[colorIntensity],
    Overdue: red[colorIntensity]
}
const TaskCard: React.FC<TaskCardProps> = ({task}) => {
    const theme = useTheme();
    const dispatch = useAppDispatch()
    const {id: taskId, description, dueDate, isComplete, status} = task
    const {handleUpdateDueDate, isUpdating} = UseTaskUpdater()


    const handleChange = (newDate: string) => {
        handleUpdateDueDate(newDate, taskId)
    }

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {checked} = event.target
        dispatch(setTasksSelected({taskId, checked}))
    }

    return (
        <Card>
            <CardContent sx={{
                backgroundColor: colorByStatus[status],
                color: "#ffffff",
                display: 'flex',
                gap: 4,
                justifyContent: 'space-between',
                alignItems: 'center',
                [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                },
            }}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    {!isComplete &&
                      <CheckboxCustom
                        color="#ffffff"
                        onChange={handleChangeCheckbox}
                      />}
                    <Typography variant="body1" style={{textAlign: 'justify'}}>{description}</Typography>
                </Box>
                <Box sx={{display: 'flex', gap: 1, alignItems: 'center', flexShrink: 0}}>
                    <DatePicker
                        value={formaterDate(dueDate)}
                        onChange={handleChange}
                        disabled={isComplete || isUpdating}
                    />
                    {isUpdating ? <CircularProgress/> : getStatusIcon(status)}
                </Box>
            </CardContent>
        </Card>
    );
};

export default TaskCard;
