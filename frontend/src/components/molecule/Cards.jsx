import React from 'react';
import {Card,CardHeader,CardMedia,CardActions, Paper, Box} from '@mui/material';
import {BtnPmCards} from 'components/atom/Buttons';

/**
 * 
 * @param {*} measurer 
 * @param {*} handleClickOpen 
 * @returns 
 */
export default function CardMeasurer({measurer,handleClickOpen}) {
    const {id,nombre,descripcion} = measurer;
 
    return (<>
    <Box sx={{maxWidth:250, mx:1, my:1}}>
        <Paper elevation={3}>
            <Card >
                <CardHeader 
                    title={nombre}
                    subheader={descripcion}
                    sx={{bgcolor:'#419f8d', py:1, mb:2, color:'#fff', textAlign:'center', textTransform:'Uppercase'}}
                />
                <CardMedia component="img" title="Imagen a modo ilustrativo" image="https://http2.mlstatic.com/D_NQ_NP_836306-MLA47250054365_082021-O.webp" sx={{px:2}}/>
               
                <CardActions  sx={{my:1, display:"flex", justifyContent:"center"}} >
                    <BtnPmCards variant="outlined" text='KW'  handleClick={(e)=>handleClickOpen({"id":id,"measurement":'kW'})} />
                    <BtnPmCards variant="contained" text='kVar' handleClick={(e)=>handleClickOpen({"id":id,"measurement":'kVar'})} />
                </CardActions>
            </Card>
        </Paper>
    </Box>
  </>);
}
