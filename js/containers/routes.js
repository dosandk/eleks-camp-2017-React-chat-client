import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app';
import ChatContainer from '../containers/chat';
import LoginContainer from '../containers/login';

const Routes = () => {
  return (
    <div>
      <Route component={ App } />
      <Switch>
        <Route exact path='/' component={ LoginContainer } />
        <Route path='/chat' component={ ChatContainer } />
      </Switch>
    </div>
  );
};

export default Routes;
