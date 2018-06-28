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
    state = {
        action: "",
        chosenAction:""
    };

    chooseThisAction = e => {
        let action = e.target.value;
        this.setState({action});
    };

    handleClick = () => {
        this.props.render(this.state.action);
    };

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
                                handleChange={this.chooseThisAction}
                                />
                            </StyledCombo>
                            <button
                            onClick={this.handleClick}
                            disabled={!this.state.action}
                            >
                                Go!
                            </button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

export default ActionSearch;