import React, {Component} from "react";

const CompanyBox = props => (
    <div className="row">
        /*name*/
        <div className="col-sm">{props.name}</div>
        /*address*/
        <div className="col-sm">
            {props.address}<br />
            {props.city}
        </div>
        /*contact*/
        <div className="col-sm">
            {props.phone} =<br />
            {props.email}
        </div>
        /*more information*/
        <div className="col-sm">
            <a href={props.site} target="_blank">Website</a><br />
            <button onClick={() => props.triggerModal(props.id)}>About</button>
        </div>
        /*modal to triggle about = props.modal*/
    </div>
);

export default CompanyBox;