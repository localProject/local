import React, {Component} from "react";
import "./ActionSearch.css";
import styled from "styled-components";
import Combobox from "../Combobox";
import {accountActions} from "../Combobox/searchOptions";

// change width of Combobox for this page only
const StyledCombo = styled.div`
    width: 55%;
    margin: auto;
`;

class ActionSearch extends Component {

    render () {
        return (
            <div>
                <div className="container action-search-container">
                    <div className="row">
                        <div className="col-sm">
                            <h3>What would you like to do?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <StyledCombo>
                                <Combobox 
                                data={accountActions}
                                />
                            </StyledCombo>
                            <button>Go</button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

export default ActionSearch;