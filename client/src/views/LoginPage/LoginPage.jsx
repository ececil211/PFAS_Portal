import '../../assets/css/argon-design-system.css';
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/font-awesome.css";
import { View } from "react-native";
import React from "react";
import NavBar from "../../assets/elements/NavBar.jsx";
import "./LoginPage.css"

function LoginPage(){
    return(
        <View flex="1">
        <div >
            <body class="index-page"/>
            <NavBar/>
            <div class="wrapper">
                <div class="section section-hero section-shaped">
                <div class="shape shape-style-1 shape-primary">
                    <span class="span-150"></span>
                    <span class="span-50"></span>
                    <span class="span-50"></span>
                    <span class="span-75"></span>
                    <span class="span-100"></span>
                    <span class="span-75"></span>
                    <span class="span-50"></span>
                    <span class="span-100"></span>
                    <span class="span-50"></span>
                    <span class="span-100"></span>
                </div>
                <h4 className="text-right">Log In</h4>
                <div className='right-container'>
                    <input type="text" className="text-box-right" placeholder='Username'></input>
                </div>
                <div className='right-container'>
                    <input type="text" className="text-box-right" placeholder='Password'></input>
                </div>
                <div className='right-container'>
                    <button href="#" className="login-button">Log In</button>
                </div>
                
        <div class="separator separator-bottom separator-skew zindex-100">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
          </svg>
          </div>
          </div>
      </div>
      </div>
    </View>
    )
}
export default LoginPage;