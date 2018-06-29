import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FancyBanner from '../components/FancyBanner';

class CreateAccountPage extends Component {
  state = {
    username: null,
    password: null,
    error: null
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    // clear any previous errors so we don't confuse the user
    this.setState({
      error: null
    });

    // check to make sure they've entered a username and password.
    // this is very poor validation, and there are better ways
    // to do this in react, but this will suffice for the example
    if (!username || !password) {
      this.setState({
        error: 'A username and password is required.'
      });
      return;
    }

    // post an auth request
    axios.post('/api/users', {
      username,
      password,
      artisan: this.props.match.params.company
    })
      .then(user => {
        // if the response is successful, make them log in
        history.push('/login');
      })
      .catch(err => {

        this.setState({
          error: err.response.data.message || err.message
        });
      });
  }
  render() {
    const { error } = this.state;

    return (
      <div>
        <FancyBanner 
        img="2"
        gradient="0"
        height="400px"
        subtitle="Create a local. account."
        />
        <div className="container">
          <form onSubmit={this.handleLogin}>
            {error &&
              <div>
                {error}
              </div>
            }
            <div className="row">
              <div className="col-sm">
                <TextField
                name="username"
                hintText="Username"
                floatingLabelText="Username"
                onChange={this.handleInputChanged}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <TextField
                name="password"
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                onChange={this.handleInputChanged}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm">
                <RaisedButton primary type="submit">
                  Create
                </RaisedButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateAccountPage;
