import React from "react";
import "./Textarea.css";

const Textarea = props => (
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <form>
                    <div className="form-group">
                        <label for="{props.label}">{props.label}</label>
                        <textarea 
                        className="form-control area-input" 
                        rows="3"
                        name={props.name}
                        value={props.value}
                        onChange={props.handleInputChange}
                        />
                    </div>   
                </form>
            </div>
        </div>
    </div>

);

export default Textarea;