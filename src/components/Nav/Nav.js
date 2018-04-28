import React from 'react';
import IoBeer from 'react-icons/lib/io/beer';
import IoFork from 'react-icons/lib/io/fork';
import IoIosContact from 'react-icons/lib/io/ios-contact';
import IoBonfire from 'react-icons/lib/io/bonfire';
import IoIosSearchStrong from 'react-icons/lib/io/ios-search-strong';

const Nav = () => {
  return (
    <nav className="main-nav">
      <h1 className="title nav-item">Beer Meat</h1>
      <form class="nav-item">
        <input type="search" placeholder="search"/>
        <button type="submit"><IoIosSearchStrong /></button>
      </form>
      <li className="nav-item"><a href="#"><IoBonfire />What's Hot</a></li>
      <li className="nav-item"><a href="#"><IoFork />Meat</a></li>
      <li className="nav-item"><a href="#"><IoBeer /> Beer</a></li>
      <li className="nav-item"><a href="#"><IoIosContact /></a></li>
    </nav>
  );
}

export default Nav;