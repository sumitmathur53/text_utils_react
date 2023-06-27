import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
// import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="textutils" aboutText="About" />

      <div className="container my-3">
        <TextForms heading = "Enter the text to analyse"/>
      </div>

      {/* <About/> */}

    </>
  );
}

export default App;
