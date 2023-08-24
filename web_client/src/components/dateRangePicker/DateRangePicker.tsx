import React from 'react';
import DatePicker from "../datePicker/DatePicker";
import Grid from "@mui/material/Grid";

interface DateRangePickerProps {
    fromValue: string | null
    toValue: string | null
    onChange: (date: {from: string | null, to: string | null}) => void
    disabled?: boolean
    fromLabel?: string
    toLabel?: string
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({fromValue, toValue,fromLabel, toLabel, onChange, disabled}) => {
    const handleChangeFromDate = (date: string)=> {
        onChange({from: date, to: toValue})
    }

    const handleChangeToDate = (date: string)=> {
        onChange({from: fromValue, to: date})
    }

    return (
        <div>
            {/* Data picker from */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <DatePicker
                        value={fromValue}
                        onChange={handleChangeFromDate}
                        fullWidth={true}
                        label={fromLabel}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* Data picker to */}
                    <DatePicker
                        value={toValue}
                        onChange={handleChangeToDate}
                        fullWidth={true}
                        label={toLabel}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default DateRangePicker;
