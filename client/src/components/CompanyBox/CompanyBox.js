import React, {Component} from "react";
import CompanyDetail from "./CompanyDetail";

class CompanyBox extends Component {
 
 // states that will be updated based on search
    state = {
     result: {},
     search: ""
 };

 // when component mounts
 // clear search filters
 // repopulate map (not here)
    componentDidMount() {

    };

 // change information based on search
    handleInputChange = event => {

    };

 // on submit
 // clear search result
    <div className="container">
        <div className="row">

            // name
            <div className="col-sm">
            {props.name}
            </div>

            // address
            <div className="col-sm">
            {props.address}
            {props.city}
            </div>

            // contact
            <div className="col-sm">
            {props.phone}
            {props.email}
            </div>
            
            // more information
            <div className="col-sm">
            <a href={props.site} target="_blank">Website</a>
            <button onClick={() => props.triggerModal(props.id)}>About</button>
            </div>
        </div>
    </div>

};

export default CompanyBox;