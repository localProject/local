import axios from 'axios';
import React, {Component} from 'react';
import { List, ListItem } from 'material-ui/List';
import Search from "../components/Search/Search";

class LocalStore extends Component {
    state = {
        stuff: null
    }

    render() {
        return (
            <div>
                <Search />
                <br /> Put store here.
            </div>
        )
    }

}

export default LocalStore;