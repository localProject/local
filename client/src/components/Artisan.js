import React from "react";

export default class Artisan extends React.Component {
  componentDidUpdate(prevProps) {
    //Only update marker if the updated map is not equal to the previous map,
    //or this fartisan is not equal to the previous fartisan
    if (
      this.props.map !== prevProps.map ||
      this.props.artisan !== prevProps.artisan
    ) {
      //If this marker exists, reset it to null
      if (this.marker) {
        this.marker.setMap(null);
      }

      const { google, artisan } = this.props;
      const geocoder = new google.maps.Geocoder();

      //Calling geocode to get the lat/long for the artisan so that we can create the marker
      geocoder.geocode(
        { address: `${artisan.address}, ${artisan.city}, NC` },
        (results, status) => {
          //on geocode success
          if (status === "OK") {
            //Create the new marker from the first result's location
            this.marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: this.props.map
            });

            this.marker.addListener(
              "click",
              (() => {
                this.props.onClick(this.marker, this.props.artisan);
              }).bind(this)
            );
          }
        }
      );
    }
  }
  render() {
    return null;
  }
}
