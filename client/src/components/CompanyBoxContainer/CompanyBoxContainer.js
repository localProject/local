import React, {Component} from "react";
import CompanyBox from "../CompanyBox/CompanyBox";
import axios from "axios";

class CompanyBoxContainer extends Component {
    state = {
        searchResults: []
    };

    componentDidMount() {
        // something about no search results before search
        axios.get("/api/artisans")
            .then(res => this.setState({searchResults: res.data}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">Company Name</div>
                    <div className="col-sm">Address</div>
                    <div className="col-sm">Contact Info</div>
                    <div className="col-sm">More Info</div>
                </div>
                {this.state.searchResults.map(result => (
                    <CompanyBox
                    company={result}
                    />
                ))}
            </div>
        );
    }
}

export default CompanyBoxContainer;