import React from 'react';
import ReactLoading from 'react-loading';
import IoLogIn from 'react-icons/lib/io/log-in';
import GoMailRead from 'react-icons/lib/go/mail-read';
import GoLock from 'react-icons/lib/go/lock';
import './Login.scss';

const Login = ({handleSubmit, handleChange, email, password, fetching, failure}) => {
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} onClick={e => e.stopPropagation()} className="form-container center" style={{borderRadius: '0 0 5px 5px'}}>
        <div className="form-group">
          <div className="auth-input">
            <GoMailRead className="position-absolute auth-icon" />
            <input onChange={handleChange} value={email} className="auth-input" type="text" />
          </div>
        </div>
        <div className="form-group auth-input">
          <GoLock className="position-absolute auth-icon" />
          <input onChange={handleChange} value={password} className="auth-input" type="password" />
        </div>

        {fetching &&
          <ReactLoading />
        }

        {failure &&
          <p className="alert-danger" style={{color: 'white'}}>Invalid Credentials</p>
        }
        
        <button className="btn form-submit" type="submit"><IoLogIn /> Login</button>
      </form>
    </div>
  )
};

export default Login;