import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import History from './history';
import Settings from './settings';
import Login from './login';
import Calibration from './calibration';
import Configure from './configure';
import Calibrate from './calibrate';
import CalibrationResults from './calibrationResults';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
    <Route index='/dashboard'element={<App/>}/>
    <Route path='/history'element={<History/>}/>
    <Route path='/calibration'element={<Calibration/>}/>
    <Route path='/settings'element={<Settings/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/configure'element={<Configure/>}/>
    <Route path='/calibrate'element={<Calibrate/>}/>
    <Route path='/calibrationresults'element={<CalibrationResults/>}/>
    
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
