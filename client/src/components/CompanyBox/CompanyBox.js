import React, {Component} from "react";
import "./CompanyBox.css"

const CompanyBox = ({company}) => (
    <div className="row company-row">
        {/*name*/}
        <div className="col-sm">{company.artisanName}</div>
        {/*address*/}
        <div className="col-sm">
            {company.address}<br />
            {company.city}
        </div>
        {/*contact*/}
        <div className="col-sm">
            {company.phone}<br />
            {company.email}
        </div>
        {/*more information*/}
        <div className="col-sm">
            <a href={company.website} target="_blank">Website</a><br />
            <button onClick={() => company.triggerModal(company.id)}>About</button>
        </div>
        {/*modal to trigger about = company.modal*/}
    </div>
);

export default CompanyBox;