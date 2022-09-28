import React from 'react';
import {Link} from 'react-router-dom';
import {Card,CardHeader,CardMedia,CardActions,Typography, Paper, Box} from '@mui/material';
import {BtnPmCards} from 'components/atom/Buttons';

export default function CardMeasurer({measurer,handleClickOpen}) {
    const {nombre,descripcion} = measurer;
   
    return (<>
    <Box sx={{maxWidth:225, mx:2, my:1}}>
        <Paper elevation={3}>
            <Card >
                <CardHeader 
                    title={nombre}
                    subheader={descripcion}
                    sx={{bgcolor:'#419f8d', py:1, mb:2, color:'#fff', textAlign:'center', textTransform:'Uppercase'}}
                />
                <CardMedia component="img" title="Imagen a modo ilustrativo" image="https://http2.mlstatic.com/D_NQ_NP_836306-MLA47250054365_082021-O.webp" sx={{px:2}}/>
               
                <CardActions  sx={{my:1, display:"flex", justifyContent:"center"}} >
                    <BtnPmCards variant="outlined" text='KW'  handleClick={(e)=>handleClickOpen('kW')} />
                    <BtnPmCards variant="contained" text='kVar' handleClick={(e)=>handleClickOpen('kVar')} />
                </CardActions>
            </Card>
        </Paper>
    </Box>
  </>);
}
