import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app';
import ChatContainer from '../containers/chat';
import LoginContainer from '../containers/login';

const Routes = () => {
  return (
    <div className="routes-wrapper">
      <Route exact path='/' component={ LoginContainer } />
      <Route component={ App } />
      <Switch>
        <Route path='/chat' component={ ChatContainer } />
      </Switch>
    </div>
  );
};

export default Routes;
