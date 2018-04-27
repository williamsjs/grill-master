import React from 'react';
import IoBeer from 'react-icons/lib/io/beer';
import IoFork from 'react-icons/lib/io/fork';
import IoIosContact from 'react-icons/lib/io/ios-contact';

const Nav = () => {
  return (
    <nav className="main-nav">
      <li><a href="#"><IoIosContact /></a></li>
      <li><a href="#"><IoFork />Meat</a></li>
      <li><a href="#"><IoBeer /> Beer</a></li>
      <form>
        <input type="search" placeholder="search"/>
      </form>
    </nav>
  );
}

export default Nav;