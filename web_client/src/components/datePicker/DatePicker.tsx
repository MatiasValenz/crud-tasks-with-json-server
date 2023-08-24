import * as React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker as DatePickerMui} from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/es';
import dayjs from "dayjs";
import "./style.css"
import utc from 'dayjs/plugin/utc';
dayjs.locale('es')
dayjs.extend(utc);

interface DatePickerProps {
    value?: string | null
    onChange?: (date: string) => void
    disabled?: boolean
    fullWidth?: boolean
    label?: string
}
const DatePicker: React.FC<DatePickerProps> = ({value, onChange, disabled, fullWidth, label}) => {
    const dateValue = value ? dayjs(value) : null

    const handleDateChange = (date: any) => {
        onChange && onChange(date.utc().format())
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerMui
                format={"DD/MM/YYYY"}
                disabled={disabled}
                value={dateValue}
                onChange={handleDateChange}
                sx={fullWidth ? {width: '100%'} : {}}
                label={label}
            />
        </LocalizationProvider>
    );
};

export default DatePicker;
