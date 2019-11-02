import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Error } from '../pages/error';
import { Home } from '../pages/home';
import { TokenVerification } from '../pages/tokenVerify';
import { PublicRoute } from './PublicRoute';
import { SignIn } from '../pages/signIn';

export const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute path="/verifyToken" component={TokenVerification} />
      <PublicRoute path="/signin" component={SignIn} />
      <PublicRoute path="*" component={Error} />
    </Switch>
  </Router>
);
