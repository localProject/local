import React from "react";
import "./Input.css";

const Input = props => (
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <form>
                    <div className="form-group">
                        <label for={props.label}>{props.label}</label>
                        <input
                        type="text"
                        className="form-control text-input"
                        name={props.name}
                        value={props.value}
                        placeholder={props.placeholder}
                        onChange={props.handleInputChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>

);

export default Input;