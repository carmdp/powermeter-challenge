import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MeasurersProvider from 'context/MeasurersProvider'

import App from 'views/App';
import DashBoard from 'views/Dashboard';

export default function RoutePages() {

  return (<>
    
      <Routes>
          <Route path="/" element={ <MeasurersProvider><App /></MeasurersProvider>} >
            <Route path=":id"  element={<DashBoard />} />
          </Route>  
      </Routes>
    
  </>);
  
}
