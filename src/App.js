// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
// import About from "./components/About";
import React, { useState } from 'react';  // imrs to import
import Alert from './components/Alert'


function App() {

  const[mode, setMode] = useState('light');  // wheather the dark mode is enabled or not

  const[alert,setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success")
    }
  }


  return (
    <>
      {/* <Navbar title="textutils" aboutText="About" mode = {mode} /> */}
      
      <Navbar title="textutils" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForms showAlert={showAlert} heading = "Enter the text to analyse" mode={mode}/>
      </div>

      {/* <About/> */}

    </>
  );
}

export default App;
