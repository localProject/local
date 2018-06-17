import React from "react";
import searchOptions from "./searchOptions";

const Combobox = props => (
    <form>
        <div className="form-group">
            <label for="{props.label}">{props.label}</label>
            <select className="form-control" id="searchBy">
                /* map over options */
                <options>{props.searchBy}</options>
            </select>
        </div>
    </form>
);

export default Combobox;