import axios from "axios";
import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import CompanyBoxContainer from "../components/CompanyBoxContainer/CompanyBoxContainer";
import { List, ListItem } from "material-ui/List";
import { withUser } from "../services/withUser";
import ArtisanMap from "../components/ArtisanMap";
import Search from "../components/Search/Search";
import MapContainer from "../components/ArtisanMap";
import FancyBanner from "../components/FancyBanner";

class HomePage extends Component {
  state = {
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
        <FancyBanner
        img="2"
        gradient="0"
        height="400px"
        subtitle="Bringing local goods from local artisans to global consumers."
        />
        <MapContainer
        // google={this.props.google}
        // artisans={this.state.artisans}
        />
        <br />
        <Search search={this.searchForArtisans} />
        {/*<ArtisanMap google={this.props.google} artisans={this.state.artisans} />*/}
        <br />
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
