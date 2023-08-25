import React from 'react';
import {TextField} from "@mui/material";

interface CustomTextFieldProps {
    label: string
    value: string
    name?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    fullWidth?: boolean
    multiline?: boolean
}
const CustomTextField: React.FC<CustomTextFieldProps> = ({label, value,name, onChange, disabled, fullWidth,multiline}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }

    return (
        <TextField
            variant="outlined"
            label={label}
            value={value}
            name={name}
            onChange={handleChange}
            disabled={disabled}
            fullWidth={fullWidth}
            multiline={multiline}
            rows={4}
        />
    );
};

export default CustomTextField;
