import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FancyBanner from '../components/FancyBanner'
import About from "../components/About/About";

class AboutUsPage extends Component {
    render() {
        return (
            <div className='about'>
                <FancyBanner
                img="2"
                gradient="0"
                height="400px"
                subtitle="What are we all about?"
                />
                <About />
            </div>
        );
    }

                
        
}


export default AboutUsPage;