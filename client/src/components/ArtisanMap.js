import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import InfoWindow from "./InfoWindow";
import Artisan from "./Artisan";

const MapContainer = styled.div`
  width: 90vw;
  height: 60vh;
  margin-left: 5%;
  border-radius: 10px 10px;
  box-shadow: 4px 6px 4px 3px;
`;

export default class ArtisanMap extends Component {
  state = {
    map: undefined,
    activeMarker: null,
    activeArtisan: null
  };

  setActiveMarker = (marker, artisan) => {
    this.setState({
      activeMarker: marker,
      activeArtisan: artisan
    });
  };
  closeInfoWindow = () => {
    this.setState({
      activeMarker: null,
      activeArtisan: null
    });
  };

  componentDidMount() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks to make sure that props have been passed
      const { google } = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign(
        {},
        {
          center: { lat: 35.782169, lng: -80.793457 }, // sets center of google map to NC.
          zoom: 7, // sets zoom. Lower numbers are zoomed further out.
          mapTypeId: "roadmap" // Main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
        }
      );

      const map = new maps.Map(node, mapConfig);
      map.addListener("click", this.closeInfoWindow.bind(this));
      // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
      this.setState({
        map
      });
    }
  }

  render() {
    // in our return function you must return a div with ref='map'.
    return (
      <div>
        <div>
          <MapContainer ref="map" />
        </div>
        <InfoWindow
          google={this.props.google}
          map={this.state.map}
          marker={this.state.activeMarker}
          artisan={this.state.activeArtisan}
          closeWindow={this.closeInfoWindow}
        />
        {this.props.artisans.map((artisan, index) => (
          <Artisan
            key={artisan.address || index}
            google={this.props.google}
            map={this.state.map}
            artisan={artisan}
            onClick={this.setActiveMarker}
          />
        ))}
      </div>
    );
  }
}

ArtisanMap.defaultProps = {
  artisans: []
};
