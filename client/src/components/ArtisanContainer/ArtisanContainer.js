import React, {Component} from "react";
import "./ArtisanContainer.css";
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
        artisanName: "",
        address: "",
        city: "",
        phone: "",
        email: "",
        website: "",
        category: "",
        region: "",
        county: "",
        about: ""
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
                            />                    
                        </StyledCombo>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Textarea 
                        label="About"
                        name="about"
                        value={this.state.about}
                        handleInputChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        Logo upload
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        Manage Items
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

export default ArtisanContainer;