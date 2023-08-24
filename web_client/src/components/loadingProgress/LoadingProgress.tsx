import React from 'react';
import {Box, CircularProgress, Container} from "@mui/material";

const LoadingProgress: React.FC = () => {
    return (
        <Container component="main" maxWidth="md">
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <CircularProgress/>
            </Box>
        </Container>
    );
};

export default LoadingProgress;
