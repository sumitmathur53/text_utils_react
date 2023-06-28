// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
// import About from "./components/About";
import React, { useState } from 'react';  // imrs to import


function App() {

  const[mode, setMode] = useState('light');  // wheather the dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      {/* <Navbar title="textutils" aboutText="About" mode = {mode} /> */}
      
      <Navbar title="textutils" mode = {mode} toggleMode={toggleMode}/>

      <div className="container my-3">
        <TextForms heading = "Enter the text to analyse" mode={mode}/>
      </div>

      {/* <About/> */}

    </>
  );
}

export default App;
