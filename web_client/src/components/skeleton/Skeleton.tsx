import React from 'react';
import {Skeleton as MuiSkeleton} from '@mui/material/';
import {Box} from "@mui/material";

const Skeleton = () => {
    const height = 96
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
            <MuiSkeleton variant="rounded" height={height}/>
            <MuiSkeleton variant="rounded" height={height}/>
            <MuiSkeleton variant="rounded" height={height}/>
        </Box>
    );
};

export default Skeleton;
