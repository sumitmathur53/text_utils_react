// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About";
import React, { useState } from 'react';  // imrs to import
import Alert from './components/Alert'
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";


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
      showAlert("dark mode has been enabled","success");
      document.title = "textutils - dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
      document.title = "textutils - light mode";

    }
  }


  return (
    
     <>
      <BrowserRouter>
        <Navbar title="TextUtils2" aboutText="TextAbouts" mode={mode} toggleMode={toggleMode} />
          
                  
        <Alert alert={alert} />

        <div className="container my-4" mode={mode}>
          <Routes>

            <Route exact path="/about" element={<About />}></Route>

            <Route exact path="/"
              element={
                <TextForms showAlert={showAlert} heading="Enter Text to analyze " mode={mode} />                
              }
            >

            </Route>

          </Routes>

        </div>
      </BrowserRouter>
      </>
      
  );
}

export default App;
