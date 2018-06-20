import React, {Component} from "react";
import Input from "../Input/Input";
import axios from "axios";

class UpdateInventory extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        // grabbing item from inventory with specific id
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>update item</h2>
                </div>
                <div className="row">image</div>
                <div className="row">
                    <Input 
                    label="item name"
                    placeholder="item name"
                    />
                    <Input 
                    label="price"
                    placeholder="price"
                    />
                </div>
                <div className="row">
                    <button>save</button>
                    <button>delete</button>
                </div>
            </div>
        );
    }
}

export default UpdateInventory;