import React, {Component} from "react";
import Combobox from "../Combobox/Combobox";
import {searchBy, searchByRegion, searchByCategory, searchByCounty} from "../Combobox/searchOptions";
// import axios from "axios";

class Search extends Component {
    state = {
        searchOptions: "",
        label: "",
        chosenOption: []
    };

    componentDidMount() {
        this.setState({searchOptions: "Option"});
    };

    // populate second combobox based on first one
    handleChange = e => {
        let option = e.target.value;
        this.setState({searchOptions: option}, () =>
            console.log(this.state.searchOptions)
        );
        this.searchByThisOption(option);
    }

    searchByThisOption = option => {
        this.setState({label: option});
        switch(option) {
            case "Region":
                this.setState({chosenOption: searchByRegion});
                break;
            case "Category":
                this.setState({chosenOption: searchByCategory});
                break;
            case "County":
                this.setState({chosenOption: searchByCounty});
                break;
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Choose how you would like to search.</h2>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Combobox 
                        label="Search Options"
                        data={searchBy}
                        handleChange={this.handleChange}
                        />
                    </div>
                    <div className="col-sm">
                        <Combobox 
                        label={this.state.searchOptions}
                        data={this.state.chosenOption}
                        />
                    </div>
                </div>
            </div>
        )
    }
};

export default Search;