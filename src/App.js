
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("light");
const [alert,setAlert]=useState(null);


const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
setAlert(null);
  },1500)
}


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='gray';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils - Scam';
      // },3000);
      // setInterval(()=>{
      //   document.title='TextUtils - install';
      // },5000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='White';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light';
    }
  }

  return (
    <>
          <Router>
      {/* Navbar with dynamic mode */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} AboutText={""}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* Routes for different paths */}
        <Routes>
          {/* Route for Home (TextForm) */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />

          {/* Route for About */}
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
