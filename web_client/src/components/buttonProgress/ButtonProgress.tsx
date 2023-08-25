import React from 'react';
import {Button, CircularProgress} from "@mui/material";
import CheckCircleIcon from "../icons/CheckCircleIcon";

interface Props {
    text: string
    onClick?: () => void
    loading: boolean | undefined,
    disabled?: boolean
    type?: "button" | "submit" | "reset" | undefined
}

const ButtonProgress: React.FC<Props> = ({text, onClick, loading, disabled, type}) => {
    return (
        <Button type={type} variant="contained" onClick={onClick} disabled={loading || disabled} sx={{display: "flex", gap: 1, height: "32px"}}>
            {text} {loading ? <CircularProgress size={24} sx={{color: "#ffffff"}}/> :
            <CheckCircleIcon width={24} height={24} color={"#ffffff"}/>}
        </Button>
    );
};

export default ButtonProgress;
