import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { signIn } from '../../../js/ducks/user';
import IoLogIn from 'react-icons/lib/io/log-in';
import './LoginForm.scss';

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signIn(email, password))
});

const mapStateToProps = state => ({
  fetching: state.user.fetching,
  failure: state.user.signInFail
});

const ConnectedLoginForm = ({signIn, fetching, failure}) => {
  let email, password;

  const handleSubmit = e => {
    e.preventDefault();
    signIn(email.value, password.value);
  }

  return (
    <div className="login-form">
      <div className="arrow-up"></div>
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
  );
};

const LoginForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginForm);

export default LoginForm;