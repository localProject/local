import axios from "axios";
import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import CompanyBoxContainer from "../components/CompanyBoxContainer/CompanyBoxContainer";
import { List, ListItem } from "material-ui/List";
import { withUser } from "../services/withUser";
import MapContainer from "../components/MapContainer";
import Search from "../components/Search/Search";

const testArtisans = [
  {
    artisanName: "Mackey's Ferry Peanuts",
    address: "30871 US-64",
    city: "Jamesville",
    phone: "888-637-6887",
    email: "",
    website: "https://www.mpfnuts.com",
    category: "Snacks",
    region: "Coastal Plains",
    county: "Martin"
  }
];

class HomePage extends Component {
  state = {
    stuff: null,
    artisans: []
  };

  loadArtisansFromDB = () => {
    axios.get("api/artisans").then(res => {
      this.setState({ artisans: res.data });
    });
  };

  componentDidMount() {
    this.loadArtisansFromDB();
  }

  render() {
    return (
      <div>
        <MapContainer google={this.props.google} artisans={testArtisans} />
        <br />
        <Search />
        <br />
      </div>
    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(
  GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
  })(HomePage)
);
