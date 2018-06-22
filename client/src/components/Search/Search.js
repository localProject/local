import React, {Component} from "react";
import Combobox from "../Combobox/Combobox";
import {searchBy, searchByRegion, searchByCategory, searchByCounty} from "../Combobox/searchOptions";
// import axios from "axios";

class Search extends Component {
    state = {
        searchOptions: "",
        chosenOption: ""
    };

    // componentDidMount() {
    //     this.setState({searchOptions: "Category"});
    //     this.setState({chosenOption: {searchByCategory}})
    // };

    // populate second combobox based on first one
    handleChange = e => {
        let option = e.target.value;
        this.setState({searchOptions: option}, () =>
            console.log(this.state.searchOptions)
        );
        
        // populate second array based on option
        this.setState({chosenOption: `searchBy${option}`}, () =>
            console.log(this.state.chosenOption)
        );
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
                        data={searchByCategory}
                        />
                    </div>
                </div>
            </div>
        )
    }
};

export default Search;