import React from "react";
import "./Input.css";

const Input = props => (
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <form>
                    <div className="form-group">
                        <label for={props.label}>{props.label}</label>
                        <input type={props.label} className="form-control text-input" id="input" placeholder={props.placeholder} />
                    </div>
                </form>
            </div>
        </div>
    </div>

);

export default Input;