import React from 'react';
import IoLogIn from 'react-icons/lib/io/log-in';

const LoginForm = () => {
  return (
    <form onClick={e => e.stopPropagation()} className="form-container center">
      <div className="form-group">
        <label className="form-label">Email: </label>
        <input className="form-control" type="text" placeholder="email" />
      </div>
      <div className="form-group">
        <label className="form-label">Password: </label>
        <input className="form-control" type="password" placeholder="password" />
      </div>
      <button className="btn bs-success form-submit" type="submit"><IoLogIn /> Login</button>
    </form>
  );
};

export default LoginForm;