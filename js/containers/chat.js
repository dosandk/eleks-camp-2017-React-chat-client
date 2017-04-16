import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chat from '../components/chat';
import * as chatActions from '../actions/chat';
import { push } from 'react-router-redux';

class ChatContainer extends Component {
  constructor(...args) {
    super(...args);
    const { user } = this.props;

    if (!user.username) {
      this.props.push('/');
    }
  }
  render() {
    return (
      <Chat {...this.props} />
    );
  }
}

const mapStateToProps = ({ messages, user }) => ({ messages, user });
const mapActionsToProps = dispatch => bindActionCreators(Object.assign({}, chatActions, { push }), dispatch);

export default connect(mapStateToProps, mapActionsToProps)(ChatContainer);
