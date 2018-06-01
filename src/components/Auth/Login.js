import React from 'react';
import ReactLoading from 'react-loading';
import IoLogIn from 'react-icons/lib/io/log-in';

const Login = ({handleSubmit, handleChange, email, password, fetching, failure}) => {
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} onClick={e => e.stopPropagation()} className="form-container center" style={{borderRadius: '0 0 5px 5px'}}>
        <div className="form-group center">
          <label className="form-label">Email: </label>
          <input onChange={handleChange} value={email} className="form-control" type="text" placeholder="email" />
        </div>
        <div className="form-group">
          <label className="form-label">Password: </label>
          <input onChange={handleChange} value={password} className="form-control" type="password" placeholder="password" />
        </div>

        {fetching &&
          <ReactLoading />
        }

        {failure &&
          <p className="alert-danger" style={{color: 'white'}}>Invalid Credentials</p>
        }
        
        <button className="btn bs-success form-submit" type="submit"><IoLogIn /> Login</button>
      </form>
    </div>
  )
};

export default Login;