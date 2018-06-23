import React, {Component} from "react";
import "./ArtisanContainer.css";
import Input from "../Input/Input";
import Combobox from "../Combobox/Combobox";
import Textarea from "../Textarea/Textarea";
// import UploadPhoto from "../UploadPhoto/UploadPhoto";
import {searchByRegion, searchByCategory, searchByCounty} from "../Combobox/searchOptions";

class ArtisanContainer extends Component {
    render() {
        return (
            <div className="container artisan-container">
                <div className="row">
                    <Input 
                    label="company name"
                    placeholder="company name"
                    />
                </div>
                <div className="row">
                    <Input 
                    label="address"
                    placeholder="address"
                    />
                </div>
                <div className="row">
                    <Input 
                    label="city"
                    placeholder="city"
                    />
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Combobox 
                        label="county"
                        data={searchByCounty}
                        />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm">
                        <Combobox 
                        label="region"
                        data={searchByRegion}
                        />  
                    </div>
                </div>
                <div className="row">
                    <Input 
                    label="phone"
                    placeholder="phone"
                    />
                </div>
                <div className="row">
                    <Input 
                    label="email"
                    placeholder="email"
                    />
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Combobox 
                        label="category"
                        data={searchByCategory}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Textarea 
                        label="about"
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
                        <button>Save Changes</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArtisanContainer;