import React from "react";
import "./Combobox.css";

const Combobox = props => (
  <form>
    <div className="form-group">
      <label for={props.label}>{props.label}</label>
      <select
        className="form-control"
        onChange={props.handleChange}
        value={props.value}
      >
        <option value="" />
        {/* map over options */}
        {props.data.map(search => <option value={search}>{search}</option>)}
      </select>
    </div>
  </form>
);

export default Combobox;
