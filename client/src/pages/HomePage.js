import axios from 'axios';
import React, { Component } from 'react';
import { GoogleApiWrapper } from "google-maps-react";
import CompanyBoxContainer from "../components/CompanyBoxContainer/CompanyBoxContainer";
import { List, ListItem } from 'material-ui/List';
import { withUser } from '../services/withUser';
import MapContainer from "../components/MapContainer"

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
          <MapContainer google={this.props.google} />
        <br /> Then the search.
          <hr />
        <CompanyBoxContainer />
        <br /> Then things will dynamically appear.
          <br /> Then the footer at the bottom.
        </div>

    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(HomePage));
