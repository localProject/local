import axios from 'axios';
import React, { Component } from 'react';
import { GoogleApiWrapper } from "google-maps-react";
import Search from "../components/Search/Search";
// import { List, ListItem } from 'material-ui/List';
import { withUser } from '../services/withUser';
import MapContainer from "../components/MapContainer"
import FancyBanner from '../components/FancyBanner'
class HomePage extends Component {
  state = {
    stuff: null
  }

  render() {

    return (
     
      <div>
        <FancyBanner img='2' gradient='0' height='400px'/>
        <MapContainer google={this.props.google} /><br />
        <Search /><br />
      </div>

    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(HomePage));
