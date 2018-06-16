import React, {Component} from "react";
import CompanyBox from "../CompanyBox/CompanyBox";

class CompanyBoxContainer extends Component {
    state = {
        searchResults: {}
    };

    componentDidMount() {
        // something about no search results before search
    };

    render() {
        return (
            <div>
                {this.state.searchResults.map(result => (
                    <CompanyBox
                        /*triggerModal={this.triggerModal}*/
                        id={result.id}
                        key={result.id}
                        name={result.artisanName}
                        address={result.address}
                        city={result.city}
                        phone={result.phone}
                        email={result.email}
                        website={result.website}
                        category={result.category}
                        region={result.region}
                        county={result.county}
                        about={result.about}
                    />
                ))}
            </div>
        );
    }
}

export default CompanyBoxContainer;