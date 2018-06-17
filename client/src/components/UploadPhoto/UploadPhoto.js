import React from "react";

const UploadPhoto = props => (
    <form>
        <div className="form-group">
            <label for="upload">{props.label}</label>
            <input type="file" className="form-control-file" id="upload" />
        </div>
    </form>
);

export default UploadPhoto;