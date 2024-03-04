import './assets/css/argon-design-system.css';
import "./assets/css/nucleo-svg.css";
import "./assets/css/font-awesome.css";
import React from "react";
import HomePage from "./views/HomePage/HomePage";
import LoginPage from './views/LoginPage/LoginPage';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
        <Routes> 
            <Route path="/" element={<HomePage/> } /> 
            <Route path="/login" element={<LoginPage/> } /> 
        </Routes> 
    </div>
  );
}
export default App;
