import React, {useState, useEffect} from 'react';
import {MeasurersContext} from './Contexts';
import { GetTreeCompany, GetMeasurerById } from 'controllers/powermeterController';


const MeasurersProvider = ({children}) => {
    const [companies,setCompanies] = useState();
  

    useEffect(() => {
        GetTreeCompany().then(res => setCompanies(res));

    },[]);

   

    return(
            <MeasurersContext.Provider
                value={{
                    companies,
                    measurer: (params) => GetMeasurerById(params).then(res => res[0]),
                }}
            >
                {children}
            </MeasurersContext.Provider>
    )
    
}

export default MeasurersProvider; 