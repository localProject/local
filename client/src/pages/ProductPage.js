import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './ProductPage.css'
import FancyBanner from '../components/FancyBanner'
import ItemCardContainer from '../components/ItemCardContainer'

class ProductPage extends Component {
    state = {
        stuff: null
    }

    render() {
        return (
            <div>
                <FancyBanner
                height='400px'
                img='2'
                gradient='0'
                subtitle="Browse the local goods."
                />
                <div class="card-container-header"
                style={{
                'margin-top': '60px',
                'margin-left': '70px',
                'margin-bottom': '15px',
                'font-size': '20px'
                }}
                >lovingly produced local goods</div>
                <ItemCardContainer/>
           </div>
        )
    }

}

export default ProductPage;