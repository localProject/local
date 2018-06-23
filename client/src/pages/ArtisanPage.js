import axios from 'axios';
import React, {Component} from 'react';
import ArtisanContainer from "../components/ArtisanContainer/ArtisanContainer";
// import { List, ListItem } from 'material-ui/List';
import { withUser } from '../services/withUser';
import FancyBanner from '../components/FancyBanner';

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
        {/* boilerplate code for logging in
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
        }*/}
        <FancyBanner img='2' gradient='0' height='400px'/>
        <ArtisanContainer />
      </div>
    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(ArtisanPage);
