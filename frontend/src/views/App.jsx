/* ##########  COMPONENTS  ############## */
import React from 'react';
import {Outlet} from 'react-router-dom';
import TreeCompany from 'components/atom/Trees'; //Componente que lista el arbol de empresas
import {Box,CssBaseline} from '@mui/material';
import DrawerPm from 'components/molecule/Drawer';
import AppBarPm from 'components/molecule/AppBar';

function App() {  
    const drawerWidth = 240;

    return(<>
  
        <Box sx={{ display: 'flex' }}>
            <CssBaseline /> 
            <AppBarPm dw={drawerWidth} />
            <DrawerPm dw={drawerWidth} >
                <TreeCompany />
            </DrawerPm> 
            <Box component="main" sx={{ flexGrow: 1, py:8, px:4}} >
                <Outlet />
            </Box>
        </Box>
        <Box sx={{ marginTop: "40px", textAlign: "center" }}>
            <h5> Desarrollado por Recalde Claudio </h5>
        </Box>
  
    </>)
}

export default App;