import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import InvoiceScan from './components/InvoiceScan';
import IntellyDataUpload from './components/IntellyDataUpload';
import NavbarSwitch from './components/Navbar/NavbarSwitch';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavbarSwitch />
      <Switch>
        <Route exact path={'/'} component={Dashboard} />
        <Route path={'/invoice-scan'} component={InvoiceScan} />
        <Route path={'/intelly-upload'} component={IntellyDataUpload} />
      </Switch>
    </div>
  );
}

export default App;
