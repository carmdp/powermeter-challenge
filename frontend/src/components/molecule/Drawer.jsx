import React from 'react';
import {Box,Drawer,Divider} from '@mui/material';


const DrawerPm = ({dw, children}) => {
    
    return (<>
        <Drawer 
            sx={{ 
                width: dw, 
                flexShrink: 0, 
                '& .MuiDrawer-paper': {
                    width: dw, 
                    boxSizing: 'border-box'
                }
            }} 
            variant="permanent" 
            anchor="left" 
        >
            <Box 
                component="img" 
                sx={{ 
                    height: 64, 
                    maxHeight: { 
                        xs: 65, 
                        md: 65 
                    }
                }} 
                title="PowerMeter" 
                src="./assets/img/logo.png" 
            />
            <Divider  sx={{mb:3}}/>
            {children}
        </Drawer>           
    </>)

}

export default DrawerPm;

