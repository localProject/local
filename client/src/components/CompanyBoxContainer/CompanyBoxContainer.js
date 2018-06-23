import React, { Component } from "react";
import CompanyBox from "../CompanyBox/CompanyBox";
import "./CompanyBoxContainer.css";

class CompanyBoxContainer extends Component {
  render() {
    return (
      <div className="container company-container">
        <div className="row">
          <div className="col-sm">
            <h3>Company Name</h3>
          </div>
          <div className="col-sm">
            <h3>Address</h3>
          </div>
          <div className="col-sm">
            <h3>Contact Info</h3>
          </div>
          <div className="col-sm">
            <h3>More Info</h3>
          </div>
        </div>
        {this.props.searchResults.map(result => (
          <CompanyBox company={result} />
        ))}
      </div>
    );
  }
}

export default CompanyBoxContainer;
