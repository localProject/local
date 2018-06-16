import React from "react";

const Input = props => (
    <form>
        <div className="form-group">
            <label for="input">{props.label}</label>
            <input type="{props.label}" className="form-control" id="input" placeholder="{props.placeholder}" />
        </div>
    </form>
);

export default Input;