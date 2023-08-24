import React from 'react';
import {Alert, Container} from "@mui/material";

interface ErrorComponentProps {
    message: string
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({message}) => {
    return (
        <Container component="main" maxWidth="md">
            <Alert severity="error" sx={{marginTop: 2}}>{message}</Alert>
        </Container>
    );
};

export default ErrorComponent;
