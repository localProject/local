import React, { Component } from "react";
import "./Search.css";
import Combobox from "../Combobox/Combobox";
import {
  searchBy,
  searchByRegion,
  searchByCategory,
  searchByCounty
} from "../Combobox/searchOptions";
// import axios from "axios";

class Search extends Component {
  state = {
    searchBy: "",
    searchValue: "",
    chosenOption: []
  };

  // populate second combobox based on first one
  updateSearchBy = e => {
    let option = e.target.value;
    this.setState({ searchBy: option }, () => console.log(this.state.searchBy));
    this.searchByThisOption(option);
  };

  updateSearchValue = e => {
    let searchValue = e.target.value;
    this.setState({ searchValue });
  };

  handleClick = () => {
    this.props.search(this.state.searchBy, this.state.searchValue);
  };

  searchByThisOption = option => {
    switch (option) {
      case "Region":
        this.setState({ chosenOption: searchByRegion });
        break;
      case "Category":
        this.setState({ chosenOption: searchByCategory });
        break;
      case "County":
        this.setState({ chosenOption: searchByCounty });
        break;
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h2>Choose how you would like to search.</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <Combobox
                label="Search Options"
                data={searchBy}
                handleChange={this.updateSearchBy}
              />
            </div>
            <div className="col-sm">
              <Combobox
                label={this.state.searchBy}
                data={this.state.chosenOption}
                handleChange={this.updateSearchValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <button
                onClick={this.handleClick}
                disabled={!this.state.searchBy && !this.state.searchValue}
              >
                Search
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Search;
