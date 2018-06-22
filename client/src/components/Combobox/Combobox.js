import React from "react";
import "./Combobox.css";

const Combobox = props => (
    <form>
        <div className="form-group">
            <label for="{props.label}">{props.label}</label>
            <select className="form-control" onChange={props.handleChange}>
                <option></option>
                {/* map over options */}
                {props.data.map(search => <option value={search}>{search}</option>)}
            </select>
        </div>
    </form>
);

export default Combobox;