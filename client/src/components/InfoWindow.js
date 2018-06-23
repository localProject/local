import React from "react";

export default class InfoWindow extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.map !== prevProps.map) {
      this.renderInfoWindow();
    }

    if (this.props.marker && this.props.marker !== prevProps.marker) {
      this.openWindow();
    } else if (!this.props.marker && prevProps.marker) {
      this.infoWindow.close();
    }
  }

  openWindow = () => {
    this.infoWindow.setContent(
      "<p>" +
        this.props.artisan.artisanName +
        "<br />" +
        this.props.artisan.address +
        ", " +
        this.props.artisan.city +
        ", " +
        "NC" +
        "</p>"
    );
    this.infoWindow.open(this.props.map, this.props.marker);
  };

  renderInfoWindow() {
    let { map, google, mapCenter } = this.props;

    this.infoWindow = new google.maps.InfoWindow({
      content: ""
    });

    google.maps.event.addListener(
      this.infoWindow,
      "closeclick",
      this.props.closeWindow
    );
  }
  render() {
    return null;
  }
}
