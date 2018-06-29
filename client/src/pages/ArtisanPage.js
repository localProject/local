import axios from 'axios';
import React, {Component} from 'react';
import ArtisanContainer from "../components/ArtisanContainer";
import { withUser } from '../services/withUser';
import FancyBanner from '../components/FancyBanner';
import ActionSearch from "../components/ActionSearch";
import TestContainer from "../components/TestContainer";
import ItemManagement from "../components/ItemManagement";
import RouteTester from "../components/RouteTester";
import Logo from "../components/Logo";

class ArtisanPage extends Component {
  state = {
    stuff: null,
    actionChosen: ""
  }
  componentDidMount() {
    // only try loading stuff if the user is logged in.
    if (!this.props.user) {
      return;
    }

    axios.get('/api/stuff')
      .then(res => {
        this.setState({
          stuff: res.data
        });
      })
      .catch(err => {
        // if we got an error, we'll just log it and set stuff to an empty array
        console.log(err);
        this.setState({
          stuff: []
        });
      });
  }

  renderThisComponent = (action = "") => {
    this.setState({actionChosen: action}, () => {
      console.log(this.state.actionChosen)
    });
  };

    render() {

      {/*const { user } = this.props; // get the user prop from props*/}
      {/*const { stuff } = this.state; // get stuff from state*/}
      let containerRendered;
      if (this.state.actionChosen == "Update Profile") {
        containerRendered = <ArtisanContainer />
      } else if (this.state.actionChosen == "Manage Inventory") {
        containerRendered = <ItemManagement user={this.props.user}/>
      } else {
        containerRendered = <center><h2>Please choose an option to do something.</h2></center>
      }

    return (

      <div>
        <FancyBanner
        img='2'
        gradient='0'
        height='400px'
        subtitle="Edit your profile and manage your inventory."
        />
        <ActionSearch render={this.renderThisComponent} />
        {containerRendered}
        <Logo />
      </div>
    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(ArtisanPage);
