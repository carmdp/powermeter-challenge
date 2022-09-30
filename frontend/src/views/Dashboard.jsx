import React, {useState, useEffect, useContext} from 'react';
import { useParams } from "react-router-dom";
import { GetMeasurerById } from 'controllers/measurersController';
import {SpinnerLine} from 'components/atom/Spinner';
import ListMeasurers from 'components/organism/Lists';
import GraphMeasurer from 'components/molecule/Graph';
import {Box,Button,Grid,Typography,Paper,Slide,Dialog,AppBar,Toolbar,IconButton}  from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {MeasurersContext} from 'context/Contexts' 


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

  
/**
 * 
 * @returns 
 */
export default function DashBoard() {
  let params = useParams();
  const getMeasurer = useContext(MeasurersContext).measurer(params.id);

  const [loading,setLoading] = useState(true)
  const [instant, setInstant]= useState(null); 
  const [msgError, setMsgError] = useState(null);
  const [open, setOpen] = useState(false);
  const [measuring,setMeasuring] = useState('kw');

  const handleClickOpen = (e) => {
  console.log("OPEN", e)
    setMeasuring(e);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    getMeasurer
      .then((res)=> setInstant(res))
      .catch ((error) => {
        setMsgError(error.response)
        setInstant(null)
        console.log(error.response);
      })
      .finally(()=>{
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
  },[params])

  if ( loading )
    return <SpinnerLine />
console.log(instant)
  if (instant === null){
    return <Box sx={{ flexGrow: 1, py:8, px:4, height:'100vh'}}>{msgError.data.msg}</Box>
  }else{
    return (<>
        <Box sx={{borderBottom:2,  borderColor:'#419f8d', mt:2, mb:4}}>
          <Typography sx={{fontSize:24,fontFamily: 'Oswald'}}>MEDIDORES</Typography>
        </Box>
        <ListMeasurers measurers={instant.medidores} handleClick={handleClickOpen} />
       
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar sx={{bgcolor:'#419f8d'}}>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">{`${instant.node.nombre} - ${measuring.measurement}`}</Typography>
            </Toolbar>
          </AppBar>  
          <GraphMeasurer name={instant.node.nombre} measurements={instant.data} typeMeasurements={measuring}/>
        </Dialog>
    </>)
  }

}


