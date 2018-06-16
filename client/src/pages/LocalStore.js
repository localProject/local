import axios from 'axios';
import React, {Component} from 'react';
import { List, ListItem } from 'material-ui/List';

class LocalStore extends Component {
    state = {
        stuff: null
    }

    render() {
        return (
            <div>
                This will be the homepage.
                <br />The navbar will go up there.
                <br />The jumbotron will go here.
                <br /> Then the search.
                <br /> Then things will dynamically appear.
                <br /> Then the footer at the bottom.
            </div>
        )
    }

}

export default LocalStore;