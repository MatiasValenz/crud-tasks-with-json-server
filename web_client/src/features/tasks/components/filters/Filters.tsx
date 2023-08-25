import React from 'react';
import {Box, Card, CardContent, IconButton, Typography} from "@mui/material";
import SelectCustom from "../../../../components/select/Select";
import DateRangePickerValue from "../../../../components/dateRangePicker/DateRangePicker";
import Grid from "@mui/material/Grid";
import CustomTextField from "../../../../components/customTextField/CustomTextField";
import Refresh from "../../../../components/icons/Refresh";
import {blue} from "@mui/material/colors";
import {setDescriptionOption, setDueDateOption, setStatusOption} from "../../redux/tasksSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks/useStore";
import {filterOption} from "../../redux/tasksSelectors";

interface FiltersPropsInterface {
    clearFilter: () => void
}
const Filters: React.FC<FiltersPropsInterface> = ({clearFilter}) => {
    const dispatch = useAppDispatch()
    const {status, description, dueDate} = useAppSelector(filterOption)

    const handleSelectOnChange = (value: string) => {
        dispatch(setStatusOption(value))
    }

    const handleDescriptionOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setDescriptionOption(e.target.value))
    }

    const handleChangeDueDate = (value:{from: string | null, to: string | null}) => {
        dispatch(setDueDateOption(value))
    }

    return (
        <Card>
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 2
                }}>
                    <Typography component="div" variant="h6">
                        Filtrar por:
                    </Typography>
                    <IconButton
                    onClick={clearFilter}
                    >
                        <Refresh
                            width={24}
                            height={24}
                            color={blue[500]}
                        />
                    </IconButton>

                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <SelectCustom
                            onChange={handleSelectOnChange}
                            value={status}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label={"Texto"}
                            value={description}
                            onChange={handleDescriptionOnChange}
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="div" variant="subtitle1" sx={{marginBottom: 1}}>
                            Fecha de vencimiento
                        </Typography>
                        <DateRangePickerValue
                            fromValue={dueDate.from}
                            toValue={dueDate.to}
                            fromLabel={"Desde"}
                            toLabel={"Hasta"}
                            onChange={handleChangeDueDate}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Filters;
