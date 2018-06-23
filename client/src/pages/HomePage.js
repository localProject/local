import axios from "axios";
import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import CompanyBoxContainer from "../components/CompanyBoxContainer/CompanyBoxContainer";
import { List, ListItem } from "material-ui/List";
import { withUser } from "../services/withUser";
import MapContainer from "../components/MapContainer";
import Search from "../components/Search/Search";

class HomePage extends Component {
  state = {
    stuff: null,
    artisans: []
  };

  searchForArtisans = (searchType = "", searchValue = "") => {
    axios
      .get(`/api/artisans/${searchType.toLowerCase()}/${searchValue}`)
      .then(res => {
        this.setState({ artisans: res.data.slice(0, 20) });
      });
  };

  loadArtisansFromDB = () => {
    axios.get("/api/artisans").then(res => {
      this.setState({ artisans: res.data.slice(0, 20) });
    });
  };

  componentDidMount() {
    this.loadArtisansFromDB();
  }

  render() {
    return (
      <div>
        <MapContainer
          google={this.props.google}
          artisans={this.state.artisans}
        />
        <br />
        <Search search={this.searchForArtisans} />
        <CompanyBoxContainer searchResults={this.state.artisans} />
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
