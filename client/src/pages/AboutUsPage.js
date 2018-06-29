import React, { Component, Fragment } from 'react';
import FancyBanner from '../components/FancyBanner'
import About from "../components/About";
import Logo from "../components/Logo";

class AboutUsPage extends Component {
    render() {
        return (
            <div>
                <FancyBanner
                img="2"
                gradient="0"
                height="400px"
                subtitle="What are we all about?"
                />
                <About />
                <Logo />
            </div>
        );
    }      
}


export default AboutUsPage;