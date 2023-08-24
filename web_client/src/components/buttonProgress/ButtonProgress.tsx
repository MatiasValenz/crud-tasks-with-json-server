import React from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import CheckCircleIcon from "../icons/CheckCircleIcon";

interface Props {
    text: string
    onClick: () => void
    loading: boolean,
    disabled?: boolean
}

const ButtonProgress: React.FC<Props> = ({text, onClick, loading, disabled}) => {
    return (
        <Button variant="contained" onClick={onClick} disabled={loading || disabled} sx={{display: "flex", gap: 1, height: "32px"}}>
            {text} {loading ? <CircularProgress size={24} sx={{color: "#ffffff"}}/> :
            <CheckCircleIcon width={24} height={24} color={"#ffffff"}/>}
        </Button>
    );
};

export default ButtonProgress;
