import React, {Component} from "react";
import CompanyBox from "../CompanyBox/CompanyBox";
import "./CompanyBoxContainer.css";
import axios from "axios";

class CompanyBoxContainer extends Component {
    state = {
        searchResults: []
    };

    // componentDidMount() {
    //     // something about no search results before search
    //     axios.get("/api/artisans")
    //         .then(res => this.setState({searchResults: res.data}))
    //         .catch(err => console.log(err));
    // };

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