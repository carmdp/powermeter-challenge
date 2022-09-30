import React from 'react'
import Button from '@mui/material/Button';

const styles ={ 
    'outlined':{
        fontFamily: 'Roboto Mono',
        fontSize: 14,
        letterSpacing: 2,
        mx:1,
        color: '#419f8d',
        bgcolor: 'transparent',
        borderColor:'#419f8d',
        '&:hover': {
            color: '#fff',
            bgcolor:"#419f8d",
            borderColor:'#419f8d'
        }
    },
    'contained':{
        fontFamily: 'Roboto Mono',
        fontSize: 14,
        letterSpacing: 2,
        mx:2,
        color: '#fff',
        bgcolor:"#419f8d",
        borderColor:'#419f8d',
        boxShadow: 0,
        '&:hover': {
          color: '#404040',
          bgcolor:"#419f8d",
          borderColor:'#fff'
        }
    }
};

/**
 * 
 * @param {*} text 
 * @param {*} variant 
 * @param {*} size 
 * @param {*} handleClick 
 * @returns 
 */
export const BtnPmCards = ( {text,variant,size,handleClick} ) => {
   
  
    return (<>
        <Button 
            variant={variant} 
            size={size || 'small'} 
            onClick={handleClick} 
            sx={styles[variant]}
        >

            {text}

        </Button>
    </>)
  
}
