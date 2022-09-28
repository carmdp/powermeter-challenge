import React from 'react';
import useGoogleCharts from 'hooks/useGoogleCharts';
import {Area} from 'components/atom/Charts';


export default function GraphMeasurer({name, measurements, typeMeasurements}) {
    const google = useGoogleCharts();

    var data = [["sync_timestamp",typeMeasurements]];
    
    Object.keys(measurements).map( (key) =>  
        data.push([new Date(Date.parse(measurements[key]['sync_timestamp'])),measurements[key][typeMeasurements]])
    );
  
   
    const options = {
        title: `Medidor - ${name}`,
        width: '100%',
        height: '100%',
        hAxis: { 
            title: "Fecha/Hora", 
            titleTextStyle: { color: "#333" } 
        },
        vAxis: { 
            title: typeMeasurements, 
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