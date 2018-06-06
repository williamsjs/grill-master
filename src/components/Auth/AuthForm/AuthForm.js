import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn, signOut, emailInputChange, passwordInputChange } from '../../../js/ducks/user';
import Logout from '../Logout';
import Login from '../Login/Login';
import './AuthForm.scss';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    signIn: signIn,
    signOut: signOut,
    emailInputChange: emailInputChange,
    passwordInputChange: passwordInputChange
  }, dispatch)
);

const mapStateToProps = state => ({
  fetching: state.user.fetching,
  failure: state.user.signInFail,
  loggedIn: state.user.loggedIn,
  email: state.user.email,
  password: state.user.password
});

const ConnectedAuthForm = ({email, password, signIn, signOut, emailInputChange, passwordInputChange, loggedIn, fetching, failure, history}) => {
  const handleSubmit = e => {
    e.preventDefault();
    signIn(email, password);
  }

  const handleChange = e => {
    e.target.type === 'text' ? emailInputChange(e.target.value) : passwordInputChange(e.target.value);
  }

  const navigate = e => {
    history.push('/');
    signOut();
  }

  return loggedIn ? <Logout navigate={navigate} />
                  : <Login handleSubmit={handleSubmit}
                           handleChange={handleChange} 
                           email={email} 
                           password={password}
                           fetching={fetching} 
                           failure={failure} />
};

const AuthForm = withRouter(connect(mapStateToProps, mapDispatchToProps)(ConnectedAuthForm));

export default AuthForm;