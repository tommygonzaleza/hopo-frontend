import React from 'react';
import logo from './img/logo-white-horizontal.png';
import MyForm from './components/MyForm';
import HowToSteps from './components/HowToSteps';
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Hopo Logo" className="hopo-logo col-12 col-md-2" />
      <h2 className="col-12 col-md-6">Shopping at the airport? <span>We deliver it where you are!</span></h2>
      <MyForm />
    </div>
  );
}

export default App;
