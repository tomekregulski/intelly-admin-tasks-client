import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard, Login, InvoiceScan, IntellyDataUpload } from './Pages';
import NavbarSwitch from './components/Navbar/NavbarSwitch';
import ProtectedRoute from './ProtectedRoute';
import VenueUpload from './Pages/VenueUpload';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavbarSwitch />
      <Switch>
        <ProtectedRoute exact path={'/'} component={Dashboard} />
        <ProtectedRoute path={'/invoice-scan'} component={InvoiceScan} />
        <ProtectedRoute
          path={'/intelly-upload'}
          component={IntellyDataUpload}
        />
        <ProtectedRoute path={'/venue-upload'} component={VenueUpload} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
