import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { update } from '../services/withUser';
import FancyBanner from '../components/FancyBanner';
import Logo from "../components/Logo";

class LoginPage extends Component {
  state = {
    username: null,
    password: null
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

    // post an auth request
    axios.post('/api/auth', {
      username,
      password
    })
    .then(user => {
      // if the response is successful, update the current user and redirect to the home page
      update(user.data);
      history.push('/');
    })
    .catch(err => {
      // an error occured, so let's record the error in our state so we can display it in render
      // if the error response status code is 401, it's an invalid username or password.
      // if it's any other status code, there's some other unhandled error so we'll just show
      // the generic message.
      this.setState({
        error: err.response.status === 401 ? 'Invalid username or password.' : err.message
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
        subtitle="Sign in to your local. account."
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
                    Log In
                  </RaisedButton>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  or
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <Link to="/create">Register</Link>
                </div>
              </div>
            </form>
          </div>
          <Logo />
      </div>
    );
  }
}

export default LoginPage;
