import React from 'react';
import FileUpload from './components/FileUpload';
import NavbarSwitch from './components/Navbar/NavbarSwitch';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavbarSwitch />
      <FileUpload />
    </div>
  );
}

export default App;
