import '../../assets/css/argon-design-system.css';
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/font-awesome.css";
import "./HomePage.css"
import Box from "../../assets/elements/InfoBox";
import NavBar from "../../assets/elements/NavBar.jsx";
import React from "react";
import { View } from "react-native";

function HomePage(){
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
                <div class="page-header">
                <div class="container shape-container d-flex align-items-center py-lg">
                    <div class="col px-0">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-6 text-center">
                                <img src={require('../../assets/img/animal_research.png')} style={{"width": "400px"}} class="img-fluid"/>
                                <p class="lead text-white">This is an online portal with information regarding PFAS's. Log in to submit a request.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="separator separator-bottom separator-skew zindex-100">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
          </svg>
          </div>
          </div>
          <br/>
          <br/>
              <div className="box-container">
                <Box title="Request PFAS Withdrawal Time" content="Link to the site similar to FARAD" display="flex">
                </Box>
                <Box title="Request PFAS Exposure Assessment" content="Info and links to Request PFAS Exposure Assessment" display="flex">
                </Box>
              </div>
              <br/>
              <div className="box-container">
                <Box title="Request PFAS Food Safety Risk Assessment" content="Info and links to Request PFAS Food Safety Risk Assessment" display="flex">
                </Box>
                <Box title="Search PFAS Toxicokinetic Data" content="Info and links to Search PFAS Toxicokinetic Data" display="flex">
                </Box>
              </div>
      </div>
      </div>
    </View>
    );
}
export default HomePage;