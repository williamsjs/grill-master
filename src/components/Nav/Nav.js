import React from 'react';

const Nav = () => {
  return (
    <nav className="main-nav">
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Recipes</a></li>
      <li><a href="#">Calendar</a></li>
      <li><a href="#">Login</a></li>
      <form>
        <input type="search" />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Nav;