import React from 'react';
import logo from './img/logo-white-horizontal.png';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <div className="main-navbar-styles">
        <img className="main-logo-styles" src={logo} alt="Hopo Logo" />
        
      </div>
      <MyForm />
    </div>
  );
}

export default App;
