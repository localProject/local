import React, {Component} from "react";
import "./ArtisanContainer.css";
import {withUser} from "../../services/withUser";
import Input from "../Input";
import Combobox from "../Combobox";
import Textarea from "../Textarea";
// import UploadPhoto from "../UploadPhoto/UploadPhoto";
import styled from "styled-components";
import {searchByRegion, searchByCategory, searchByCounty} from "../Combobox/searchOptions";

// change width of Combobox for this page only
const StyledCombo = styled.div`
    width: 55%;
    margin: auto;
`;

class ArtisanContainer extends Component {

    state = {
        artisanName: this.props.user.artisan.artisanName,
        address: this.props.user.artisan.address,
        city: this.props.user.artisan.city,
        phone: this.props.user.artisan.phone,
        email: this.props.user.artisan.email,
        website: this.props.user.artisan.website,
        category: this.props.user.artisan.category,
        region: this.props.user.artisan.region,
        county: this.props.user.artisan.county
    };

    handleInputChange = e => {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    updateArtisanProfile = e => {
        e.preventDefault();
        alert("Profile successfully updated!");

    };

    render() {
        return (
            <div className="container artisan-container">
                <div className="row">
                    <Input 
                    label="Company Name"
                    name="artisanName"
                    value={this.state.artisanName}
                    placeholder="Company Name"
                    handleInputChange={this.handleInputChange}
                    />
                </div>
                <div className="row">
                    <Input 
                    label="Address"
                    name="address"
                    value={this.state.address}
                    placeholder="Address"
                    handleInputChange={this.handleInputChange}
                    />
                </div>
                <div className="row">
                    <Input 
                    label="City"
                    name="city"
                    value={this.state.city}
                    placeholder="City"
                    handleInputChange={this.handleInputChange}
                    />
                </div>
                <div className="row">
                    <div className="col-sm">
                        <StyledCombo>
                            <Combobox 
                            label="County"
                            data={searchByCounty}
                            value={this.state.county}
                            />                        
                        </StyledCombo>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <StyledCombo>
                            <Combobox 
                            label="Region"
                            data={searchByRegion}
                            value={this.state.region}
                            /> 
                        </StyledCombo>
                    </div>
                </div>
                <div className="row">
                    <Input 
                    label="Phone"
                    name="phone"
                    value={this.state.phone}
                    placeholder="Phone"
                    handleInputChange={this.handleInputChange}
                    />
                </div>
                <div className="row">
                    <Input 
                    label="Email"
                    name="email"
                    value={this.state.value}
                    placeholder="Email"
                    handleInputChange={this.handleInputChange}
                    />
                </div>
                <div className="row">
                    <Input 
                    label="Website"
                    name="website"
                    value={this.state.website}
                    placeholder="URL"
                    handleInputChange={this.handleInputChange}
                    />
                </div>
                <div className="row">
                    <div className="col-sm">
                        <StyledCombo>
                            <Combobox 
                            label="Category"
                            data={searchByCategory}
                            value={this.state.category}
                            />                    
                        </StyledCombo>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <button
                        onClick={this.updateArtisanProfile}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withUser(ArtisanContainer);