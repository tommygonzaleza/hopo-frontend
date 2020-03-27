import React from 'react';
import logo from './img/logo-white-horizontal.png';
import MyForm from './components/MyForm';
import HowToSteps from './components/HowToSteps';
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <div className="main-navbar">
        <img className="main-logo col-8 col-md-4" src={logo} alt="Hopo Logo" />
      </div>
      <MyForm />
      <HowToSteps />
      <MyFooter />
    </div>
  );
}

export default App;
