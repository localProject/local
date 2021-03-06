import axios from "axios";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { withUser, update } from "./services/withUser";
import Logo from "./components/Logo";
import CreateAccountPage from "./pages/CreateAccountPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import ArtisanPage from "./pages/ArtisanPage";
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
//import NotFoundPage from "./pages/NotFoundPage";

class App extends Component {
  componentDidMount() {
    // this is going to double check that the user is still actually logged in
    // if the app is reloaded. it's possible that we still have a user in sessionStorage
    // but the user's session cookie expired.
    axios
      .get("/api/auth")
      .then(res => {
        // if we get here, the user's session is still good. we'll update the user
        // to make sure we're using the most recent values just in case
        update(res.data);
      })
      .catch(err => {
        // if we get a 401 response, that means the user is no longer logged in
        if (err.response.status === 401) {
          update(null);
        }
      });
  }

  render() {
    const { user } = this.props;
    return (
      <Router>
      <MuiThemeProvider>
        <Fragment>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={ProductPage} />
            <Route exact path="/about" component={AboutUsPage} />
            <Route exact path="/artisan" component={ArtisanPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/create/:company?" component={CreateAccountPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Logo />
        </Fragment>
      </MuiThemeProvider>
    </Router>
    );
  }
}

export default withUser(App);