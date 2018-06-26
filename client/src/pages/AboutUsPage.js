import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './ProductPage.css'
import './AboutUsPage.css'
import FancyBanner from '../components/FancyBanner'
import About from "../components/About/About";

console.log("HEy");
class AboutUsPage extends Component {
    render() {
        return (
            <div className='about'>
                <FancyBanner height='400px' img='0' gradient='1'/>
                <About />
            </div>
        );
    }

                
        
}


export default AboutUsPage;