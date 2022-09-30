import React, {useState, useEffect} from 'react';
import { GetMeasurements } from 'controllers/measurersController';
import useGoogleCharts from 'hooks/useGoogleCharts';
import {Area} from 'components/atom/Charts';


/**
 * 
 * @param {*} typeMeasurements 
 * @param {*} name 
 * @returns 
 */
export default function GraphMeasurer({typeMeasurements, name}) {
    const {id,measurement} = typeMeasurements;
    const [measurements, setMeasurements]= useState(null); 

    useEffect(()=>{
        setMeasurements(GetMeasurements(id));
    },[id])
    
    const google = useGoogleCharts();
    
    if ((measurements != null)){
        
        var data = [["sync_timestamp",measurement]];

        Object.keys(measurements.data).map( (key) =>
            data.push([new Date(Date.parse(measurements.data[key]['sync_timestamp'])),measurements.data[key][measurement]])
        );
        
      
        const options = {
            title: `Medidor - ${measurements.nombre}`,
            backgroundColor: { fill:'transparent' },
            width: '80%',
            height: '100%',
            hAxis: {
                title: "Fecha/Hora",
                titleTextStyle: { color: "#333" }
            },
            vAxis: {
                title: measurement,
                minValue: 0,
            },
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                axis: 'horizontal',
                keepInBounds: true,
                maxZoomIn: 0.25
            }
        };

        return(<>
            
                <Area
                    google={google}
                    arre={data}
                    options={options}
                />
           
        </>)
    }
}