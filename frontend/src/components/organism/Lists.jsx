import React from 'react';
import CardMeasurer from 'components/molecule/Cards';
import Grid  from '@mui/material/Grid';
 


/**
 * 
 * @param {*} measurers 
 * @param {*} handleClick 
 * @returns 
 */
export default function ListMeasurers({measurers,handleClick}) {
 
  return (<>
    <Grid  container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
    >
    {
      measurers.map((measurer, key) =>(
        <Grid item xs={4} sm={4} key={key}>
          <CardMeasurer measurer={measurer} handleClickOpen={handleClick} key={key}/>
        </Grid>  
      ))
    }
    </Grid>
  </>)
  }


