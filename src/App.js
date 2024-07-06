import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('secondary');
  const [modeName, setModeName] = useState('LightMode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'secondary') {
      setMode('black');
      document.body.style.backgroundColor = '#091723';
      setModeName('DarkMode');
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode('secondary');
      document.body.style.backgroundColor = 'white';
      setModeName('LightMode');
      showAlert("Dark Mode has been Disabled", "success");
    }
  };

  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeName={modeName} />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
          <Route exact path="/" element={<TextForm heading="Enter your Text" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About title="About Us" mode={mode}/>} />
        </Routes>
      </div>
      </Router>

      {/* <div className="container">
        <TextForm heading="Enter your Text" mode={mode} showAlert={showAlert}/>
      </div>
      <div className="container">
        <About title="About Us" mode={mode}/>
      </div> */}
    </>
  )
}

