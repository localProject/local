import axios from 'axios';
import React, {Component} from 'react';
import { List, ListItem } from 'material-ui/List';
import { withUser } from '../services/withUser';

class HomePage extends Component {
  state = {
    stuff: null
  }

  render() {

    return (

        <div>
          This will be the homepage.
          <br />The navbar will go up there.
          <br />The jumbotron will go here.
          <br /> Then the map.
          <br /> Then the search.
          <br /> Then things will dynamically appear.
          <br /> Then the footer at the bottom.
        </div>

    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(HomePage);
