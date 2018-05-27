import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactLoading from 'react-loading';
import { signIn, signOut } from '../../../js/ducks/user';
import IoLogIn from 'react-icons/lib/io/log-in';
import IoLogOut from 'react-icons/lib/io/log-out';

import './AuthForm.scss';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    signIn: signIn,
    signOut: signOut
  }, dispatch)
);

const mapStateToProps = state => ({
  fetching: state.user.fetching,
  failure: state.user.signInFail,
  loggedIn: state.user.loggedIn
});

const ConnectedAuthForm = ({signIn, signOut, loggedIn, fetching, failure}) => {
  let email, password;

  const handleSubmit = e => {
    e.preventDefault();
    signIn(email.value, password.value);
  }

  if (loggedIn) {
    return (
      <div className="logout-container" onClick={signOut}>
        <button className="btn bs-success">logout <IoLogOut /></button>
      </div>
    )
  } else {
    return (
      <div className="login-form">
        <form onSubmit={handleSubmit} onClick={e => e.stopPropagation()} className="form-container center" style={{borderRadius: '0 0 5px 5px'}}>
          <div className="form-group center">
            <label className="form-label">Email: </label>
            <input ref={text => email = text} className="form-control" type="text" placeholder="email" />
          </div>
          <div className="form-group">
            <label className="form-label">Password: </label>
            <input ref={text => password = text} className="form-control" type="password" placeholder="password" />
          </div>

          {fetching &&
            <ReactLoading />
          }

          {failure &&
            <p className="alert-danger">Invalid Credentials</p>
          }
          
          <button className="btn bs-success form-submit" type="submit"><IoLogIn /> Login</button>
        </form>
      </div>
    )
  }
};

const AuthForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedAuthForm);

export default AuthForm;