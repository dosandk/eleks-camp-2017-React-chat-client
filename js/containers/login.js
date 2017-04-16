import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../components/login';
import * as loginActions from '../actions/login';
import * as loaderActions from '../actions/loader';
import { push } from 'react-router-redux';

class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Login {...this.props} redirect={ () => push('/chat') } />
      </div>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators(Object.assign({}, loginActions, loaderActions), dispatch);

export default connect(null, mapActionsToProps)(LoginContainer);
