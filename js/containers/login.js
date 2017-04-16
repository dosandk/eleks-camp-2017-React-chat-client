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
      <Login {...this.props} />
    );
  }
}

const actionCreators = Object.assign({}, loginActions, loaderActions, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapActionsToProps)(LoginContainer);
