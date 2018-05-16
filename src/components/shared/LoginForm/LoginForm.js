import React from 'react';

const LoginForm = () => {
  return (
    <form onClick={e => e.stopPropagation()} className="form-container">
      <div className="form-group">
        <label className="form-label">Email: </label>
        <input type="text" placeholder="email" />
      </div>
      <div className="form-group">
        <label className="form-label">Password: </label>
        <input type="password" placeholder="password" />
      </div>
      <button className="btn bs-success" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;