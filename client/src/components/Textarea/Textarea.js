import React from "react";

const Textarea = props => (
    <form>
        <div className="form-group">
            <label for="{props.label}">{props.label}</label>
            <textarea className="form-control" id="about" rows="3" />
        </div>   
    </form>
);

export default Input;