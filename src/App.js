import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
// import Switch from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({ msg: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LIGHT MODE enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#1F1A24";
      showAlert("DARK MODE enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" about="About TextUtils" home="Home" mode={mode}></Navbar> */}
      {/* <Navbar
        title="TextUtils"
        home="Home"
        mode={mode}
        togglemode={toggleMode}
      ></Navbar> */}
      {/* <Alert alert={alert}></Alert> */}
      {/* <div className="container my-3"> */}
        <Router>

          <Navbar
            title="TextUtils"
            home="Home"
            mode={mode}
            togglemode={toggleMode}
          ></Navbar>
          <Alert alert={alert}></Alert>
      

          <Routes>
            <Route exact path="/about"
              element={ <div className="container my-3"> <About mode={mode}></About></div>}>
            </Route>
            <Route  exact path="/"
              element={ <div className="container my-3"> <TextForm
                title="Enter the text below to analyze"
                mode={mode}
                showalert={showAlert}
              ></TextForm> </div>}>
            </Route>
          </Routes>
        </Router>
      {/* </div> */}

      {/* <div className="container my-3"><About></About></div> */}
    </>
  );
}

export default App;
