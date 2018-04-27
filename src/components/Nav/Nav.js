import React from 'react';

const Nav = () => {
  return (
    <nav className="main-nav">
      <li><a href="#">Login</a></li>
      <li><a href="#">Meat</a></li>
      <li><a href="#">Beer</a></li>
      <form>
        <input type="search" placeholder="search"/>
      </form>
    </nav>
  );
}

export default Nav;