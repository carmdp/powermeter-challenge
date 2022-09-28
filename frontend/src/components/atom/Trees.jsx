import React, {useState, useEffect, useContext} from 'react';
import {MeasurersContext} from 'context/Contexts' 
import {Link,Outlet} from 'react-router-dom';
import {SpinnerCircle} from 'components/atom/Spinner';
import {ExpandMore,ChevronRight,ElectricMeter} from '@mui/icons-material';
import { TreeView,TreeItem  } from '@mui/lab';
import './css/trees.css';


export default function TreeCompany(){
  
  //Obtenemos el listado de empresas
  const treeCompanies = useContext(MeasurersContext).companies;
 
  
  if (treeCompanies && treeCompanies.length > 0){
    return (<>
      <TreeView sx={{my:1}} defaultCollapseIcon={<ExpandMore />} defaultExpandIcon={<ChevronRight />} >
        {Items(treeCompanies[0])}
      </TreeView>  
    </>);
  }else{
    return <SpinnerCircle />;
  }

}

//Recorremos el arbol recursivamente
const Items = (nodo) => {
  
  if (nodo.hijos.length) {
    return (
      <TreeItem  
        sx={{py:1, color:'#fff', bgcolor:'#419f8d',fontFamily:'Oswald'}}
        key={nodo.id}
        nodeId={nodo.id.toString()} 
        label={nodo.nombre} 
      >
        {nodo.hijos.length > 0 &&
            nodo.hijos.map((hijo) => Items(hijo))}
      </TreeItem>
    );
  }

  return  ( 
    <TreeItem 
      key={nodo.id} 
      nodeId={nodo.id.toString()} 
      label={
        <Link to={`${nodo.id}`} className="linkMeter">
          <ElectricMeter sx={{mr:1}}/>{nodo.nombre}
        </Link>
      } 
    />
  )

}