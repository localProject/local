import React from "react";

const Combobox = props => (
    <form>
        <div className="form-group">
            <label for="{props.label}">{props.label}</label>
            <select className="form-control" id="searchBy">
                {/* map over options */}
                {props.data.map(search => <option value="{search}">{search}</option>)}
            </select>
        </div>
    </form>
);

export default Combobox;