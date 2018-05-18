import React from 'react';
import IoLogIn from 'react-icons/lib/io/log-in';

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="arrow-up"></div>
      <form onClick={e => e.stopPropagation()} className="form-container center" style={{borderRadius: '0 0 5px 5px'}}>
        <div className="form-group center">
          <label className="form-label">Email: </label>
          <input className="form-control" type="text" placeholder="email" />
        </div>
        <div className="form-group">
          <label className="form-label">Password: </label>
          <input className="form-control" type="password" placeholder="password" />
        </div>
        <button className="btn bs-success form-submit" type="submit"><IoLogIn /> Login</button>
      </form>
    </div>
  );
};

export default LoginForm;