import React from 'react';
import {TextField} from "@mui/material";

interface CustomTextFieldProps {
    label: string
    value: string
    onChange: (value: string) => void
    disabled?: boolean
    fullWidth?: boolean
}
const CustomTextField: React.FC<CustomTextFieldProps> = ({label, value, onChange, disabled, fullWidth}) => {
    return (
        <TextField
            variant="outlined"
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            fullWidth={fullWidth}
        />
    );
};

export default CustomTextField;
