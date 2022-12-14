import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * 
 * @returns 
 */
export const SpinnerBoth = () => {
    return(<>
      <Box sx={{ width: '100%' }}>
        <CircularProgress />
        <LinearProgress />
      </Box>
    </>)
} 

/**
 * 
 * @returns 
 */
export const SpinnerCircle = () => {
  return(<>
    <Box sx={{ width: '100%', display:'flex', alignItems:'center',justifyContent:"center"  }}>
      <CircularProgress />
    </Box>
  </>)
} 

/**
 * 
 * @returns 
 */
export const SpinnerLine = () => {
  return(<>
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  </>)
} 
