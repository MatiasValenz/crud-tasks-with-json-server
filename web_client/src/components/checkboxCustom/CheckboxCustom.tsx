import React from 'react';
import {Checkbox} from "@mui/material";

interface CheckboxCustomProps {
    color: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const CheckboxCustom: React.FC<CheckboxCustomProps> = ({color, onChange}) => {
    // const [checked, setChecked] = React.useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        // setChecked(event.target.checked);
    };
    return (
        <div>
            <Checkbox
                // checked={checked}
                onChange={handleChange}
                sx={{
                    color: {color},
                    '&.Mui-checked': {
                        color: {color},
                    },
                }}
            />
        </div>
    );
};

export default CheckboxCustom;
