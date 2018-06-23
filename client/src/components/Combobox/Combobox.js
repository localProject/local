import React from "react";
import "./Combobox.css";

const Combobox = props => (
    <form>
        <div className="form-group">
            <label for="{props.label}">{props.label}</label>
            <select className="form-control combobox-style" onChange={props.handleChange}>
                <option disabled></option>
                {/* map over options */}
                {props.data.map(search => <option value={search}>{search}</option>)}
            </select>
        </div>
    </form>
);

export default Combobox;