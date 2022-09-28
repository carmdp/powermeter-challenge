import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import RoutePages from 'config/Routes';

import 'assets/css/global.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutePages />
    </BrowserRouter>
  </React.StrictMode>
);


