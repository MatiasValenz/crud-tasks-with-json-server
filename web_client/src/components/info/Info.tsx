import React from 'react';
import {Alert} from "@mui/material";
interface InfoPropsInterface {
    message: string
}
const Info: React.FC<InfoPropsInterface> = ({message}) => {
    return (
        <Alert severity="info">{message}</Alert>
    );
};

export default Info;
