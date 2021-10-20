import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard, Login, InvoiceScan, IntellyDataUpload } from './Pages';
import NavbarSwitch from './components/Navbar/NavbarSwitch';
import ProtectedRoute from './ProtectedRoute';
import VenueUpload from './Pages/VenueUpload';

function App() {
  return (
    <div
      style={{
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      }}
    >
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
