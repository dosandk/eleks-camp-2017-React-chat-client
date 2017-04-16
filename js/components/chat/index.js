import React, { Component } from 'react';
import * as ws from '../../utils/ws';
import { TextField, RaisedButton } from 'material-ui';

import styles from './chat.scss';

class Chat extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      message: ''
    };
    this.submitMessage = this.submitMessage.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(event) {
    const { value: message } = event.target;

    this.setState({ message });
  }
  submitMessage() {
    ws.sendMessage(this.state.message);
    this.clearForm();
  }
  clearForm() {
    this.setState({ message: '' });
  }
  get messages() {
    const { messages } = this.props;

    return messages.map((item, index) => <li key={ index }>{ item }</li>) || '';
  }
  render() {
    return (
      <div className={ styles['chat-container'] }>
        <ul className={ styles['left-side'] }>
          { this.messages }
        </ul>
        <form className={ styles['right-side'] }>
          <div>
            <TextField value={ this.state.message }
                       name="message-box"
                       type="text"
                       multiLine={ true }
                       onChange={ this.changeInput } />
          </div>
          <RaisedButton label="Submit message"
                        primary={ true }
                        onClick={ this.submitMessage }/>
        </form>
      </div>
    );
  }
}

export default Chat;
