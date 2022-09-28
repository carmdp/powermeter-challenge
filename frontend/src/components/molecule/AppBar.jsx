import React, {useState, useEffect} from 'react';
import {AppBar,Toolbar,Typography} from '@mui/material';

const AppBarPm = ({dw, children}) => {
   
    return (<>
        <AppBar  position="fixed" sx={{ width: `calc(100% - ${dw}px)`, ml: `${dw}px` }} >
            {children}
            <Toolbar>
                <Typography variant="h6" noWrap component="div"> Desafío Front-End</Typography>
            </Toolbar>
        </AppBar>
    </>)
    
}

export default AppBarPm;

