import React from 'react';
import CardMeasurer from 'components/molecule/Cards';
import Grid  from '@mui/material/Grid';
 
export default function ListMeasurers({measurers,handleClick}) {
 
  return (<>
    <Grid  rowSpacing={3} justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
    {
      measurers.map((measurer, key) =>
        <CardMeasurer measurer={measurer} handleClickOpen={handleClick} key={key}/>  
      )
    }
    </Grid>
  </>)
  }


