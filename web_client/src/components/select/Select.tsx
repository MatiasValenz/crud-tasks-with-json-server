import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

interface SelectCustomProps {
    onChange: (value: string) => void,
    value: string
}

const SelectCustom: React.FC<SelectCustomProps> = ({onChange, value}) => {
    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value as string)
    };

    const options = [
        {
            id: 1,
            value: "All",
            label: "Todas"
        },
        {
            id: 2,
            value: "Overdue",
            label: "Atrasada"
        },
        {
            id: 3,
            value: "Underway",
            label: "En curso"
        },
        {
            id: 4,
            value: "AlmostLate",
            label: "Casi atrasada"
        },
        {
            id: 5,
            value: "Completed",
            label: "Completada"
        }
    ]

    return (
        <Box component="form">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Estado"
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <MenuItem key={option.id} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
export default SelectCustom;
