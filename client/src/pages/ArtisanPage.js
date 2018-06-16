import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { List, ListItem } from 'material-ui/List';
import { withUser } from '../services/withUser';

class ArtisanPage extends Component {
  state = {
    stuff: null
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
  render() {
    const { user } = this.props; // get the user prop from props
    const { stuff } = this.state; // get stuff from state

    return (
      <div>
        /* boilerplate code for logging in */
        {user && stuff &&
          <div>
            Welcome back, {user.username}!
          <List>
           {stuff.map((s, i) => <ListItem key={i} primaryText={s} />)}
          </List>
          </div>
        }
        {user && !stuff &&
          <div>Hold on, looking for your stuff...</div>
        }
        {!user &&
          <div>Hey! I don't recognize you! Register and log in using the link above</div>
        }

        Navbar<br />
        Jumbotron<br />
        Company Name & input component<br />
        Address & input component<br />
        City & input component<br />
        County & combobox component<br />
        Phone & input component<br />
        Email & input component<br />
        Category & combobox component<br />
        About & text area component<br />
        Profile Picture component<br />
        Manage Items component<br />
        <button>Save Changes</button><br />
        Footer component
      </div>
    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(ArtisanPage);
