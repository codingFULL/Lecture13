import React from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../components/home';
import NotFound from '../components/notFound';
import ShowUsers from '../components/showUsers';
import SignIn from '../components/signIn';
import SignUp from '../components/signUp';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/SignUp" component={SignUp} />
        <Route exact={true} path="/SignIn" component={SignIn} />
        <Route exact={true} path="/notFound" component={NotFound} />
        <Route exact={true} path="/showUsers" component={ShowUsers} />
        <Redirect to="/notFound" />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
