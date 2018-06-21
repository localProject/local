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
        const option = e.target.value;
        // this.setState({searchOptions: option});
        console.log(option);
    };

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
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;