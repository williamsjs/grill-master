import React, {Component} from 'react';
import IoBeer from 'react-icons/lib/io/beer';
import IoFork from 'react-icons/lib/io/fork';
import IoIosContact from 'react-icons/lib/io/ios-contact';
import IoBonfire from 'react-icons/lib/io/bonfire';
import IoIosSearchStrong from 'react-icons/lib/io/ios-search-strong';
import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { navClass: 'main-nav' };
    this.onscroll = this.onscroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onscroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onscroll)
  }

  onscroll() {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const className = top < 70 ? 'main-nav' : 'main-nav scrolled';
    this.setState({navClass: className});
  }

  render() {
    return (
      <nav className={this.state.navClass}>
        <h1 className="title nav-item">Grill Master</h1>
        <li className="nav-item"><a href="#"><IoBonfire />&nbsp;What's Hot</a></li>
        <li className="nav-item"><a href="#"><IoFork />&nbsp;Meat</a></li>
        <li className="nav-item"><a href="#"><IoBeer />&nbsp;Beer</a></li>
        <form className="nav-item search-item">
          <input type="search" placeholder="search"/>
          <button type="submit"><IoIosSearchStrong /></button>
        </form>
        <li className="nav-item profile">
          <a href="#"><IoIosContact />&nbsp;
            <span class="profile-text">My Profile</span>
          </a>
        </li>
      </nav>
    );
  }
}

export default Nav;