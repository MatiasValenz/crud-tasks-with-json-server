import React from 'react';
import DatePicker from "../../../../components/datePicker/DatePicker";
import {Box, Card, CardContent, IconButton, Typography} from "@mui/material";
import CustomTextField from "../../../../components/customTextField/CustomTextField";
import ButtonProgress from "../../../../components/buttonProgress/ButtonProgress";
import CloseIcon from "../../../../components/icons/Close";
import {red} from "@mui/material/colors";

interface TaskFormProps {
    data: {
        description: string,
        dueDate: string
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: () => void,
    loading?: boolean,
    close: () => void
}

const TaskForm: React.FC<TaskFormProps> = ({data, onChange, onSubmit, loading, close}) => {
    const {description, dueDate} = data

    const handleChangeDatePicker = (value: string) => {
        const target = {name: 'dueDate', value}
        onChange({target} as React.ChangeEvent<HTMLInputElement>)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <Card>
            <CardContent>
                <Box sx={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
                    <Typography component="div" variant="h6">
                        Nueva tarea
                    </Typography>
                    <IconButton
                    onClick={close}
                    >
                        <CloseIcon
                            width={24}
                            height={24}
                            color={red[500]}
                        />
                    </IconButton>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2}}>
                        <DatePicker
                            value={dueDate}
                            onChange={handleChangeDatePicker}
                            label={"Fecha de vencimiento"}
                        />
                        <CustomTextField
                            label={"Descripción"}
                            name={"description"}
                            value={description}
                            onChange={onChange}
                            fullWidth={true}
                            multiline={true}
                        />
                        <Box sx={{alignSelf: 'end'}}>
                            <ButtonProgress
                                text={"Agregar tarea"}
                                loading={loading}
                                disabled={!description || !dueDate}
                                type={"submit"}
                            />
                        </Box>
                    </Box>
                </form>
            </CardContent>
        </Card>
    );
};

export default TaskForm;
