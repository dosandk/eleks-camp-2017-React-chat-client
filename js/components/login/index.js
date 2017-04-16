import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, RaisedButton } from 'material-ui';

import styles from './login.scss';

class Login extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      username: '',
      pass: ''
    };

    this.changeInput = this.changeInput.bind(this);
    this.login = this.login.bind(this);
  }
  changeInput(field) {
    return event => {
      const { value } = event.target;

      this.setState({ [field]: value });
    };
  }
  login(e) {
    e.preventDefault();
    const { username, pass } = this.state;
    const { push, login, showLoader, hideLoader } = this.props;

    if (username && pass) {
      showLoader();
      login({ username, pass })
        .then(() => {
          push('/chat');
          hideLoader();
        })
        .catch(err => {
          hideLoader();
          console.error(`Error: ${err}`);
        });
    }
  }
  get credentials() {
    const { username, pass } = this.state;

    return !(username && pass);
  }
  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.logoBlock } />

        <div className={ styles.form }>
          <TextField hintText="username"
                     name="username"
                     onChange={ this.changeInput('username') }
                     type="text" />
          <TextField hintText="password"
                     name="password"
                     onChange={ this.changeInput('pass') }
                     type="password" />
          <RaisedButton label="Login"
                        primary={ true }
                        disabled={ this.credentials }
                        onClick={ this.login } />
        </div>
      </div>
    );
  }
}

export default connect()(Login);
