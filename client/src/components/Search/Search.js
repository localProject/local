import React, {Component} from "react";
import Combobox from "../Combobox/Combobox";
import {searchBy, searchByRegion, searchByCategory, searchByCounty} from "../Combobox/searchOptions";
import axios from "axios";

class Search extends Component {
    state = {
        searchOptions: ""
    };

    // componentDidMount() {
        
    // }

    // populate second combobox based on first one
    handleChange = e => {
        let option = e.target.value;
        this.setState({searchOptions: option}, () =>
        console.log(this.state.searchOptions));
        // searchByThisOption(this.state.searchOptions);
    };

    // searchByThisOption = option => {
    //     switch(option) {
    //         case "Region":
    //             this.setState({label: "Region", data: searchByRegion});
    //             break;
    //         case "Category":
    //             this.setState({label: "Category", data: searchByCategory});
    //             break;
    //         case "County":
    //             this.setState({label: "County", data: searchByCounty});
    //             break;
    //     }
    // };

    render() {
        return (
            <div className="container">
                <div className="row">
                    Choose how you would like to search.
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
                        data={searchByCategory}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;