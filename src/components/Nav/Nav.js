import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMenu } from '../../js/ducks/menuToggle';
import { getUserInfo, toggleDropdown, hideDropdown } from '../../js/ducks/user';
import { withRouter, Link } from 'react-router-dom';
import './Nav.scss';
import NavItem from './NavItem';
import MenuButton from '../shared/MenuButton/MenuButton';
import SearchBox from '../shared/SearchBox/SearchBox';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import IoBeer from 'react-icons/lib/io/beer';
import IoFireball from 'react-icons/lib/io/fireball';
import MdRestaurant from 'react-icons/lib/md/restaurant';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleMenu: toggleMenu, 
    login: getUserInfo, 
    toggleDropdown: toggleDropdown, 
    hideDropdown: hideDropdown
  }, dispatch)
);

const mapStateToProps = state => ({
  menuOpen: state.menuToggle,
  user: state.user
});

class ConnectedNav extends Component {
  constructor() {
    super();
    this.state = { navClass: 'main-nav', dropdownActive: false };
    this.onscroll = this.onscroll.bind(this);
    this.navClass = this.navClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);

  }

  componentWillMount() {
    if (window.innerWidth > 767) {
      this.props.toggleMenu();
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onscroll);
    this.props.login();

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onscroll)
  }

  onscroll() {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const className = top < 70 ? 'main-nav' : 'main-nav scrolled';
    this.setState({navClass: className});
  }

  navClass() {
    return this.props.menuOpen ? this.state.navClass : this.state.navClass + ' closed';
  }

  handleClick() {
    this.props.toggleMenu();
  }

  toggleDropdown(e) {
    e.stopPropagation();
    this.props.toggleDropdown();
  }

  hideDropdown() {
    this.props.hideDropdown();
  }

  render() {
    const {navClass} = this.state;
    const { user: { loggedIn, dropdownOpen } } = this.props;

    return (
      <nav className={this.navClass()} onClick={this.hideDropdown} >
        <h1 className="title nav-item"><Link to="/">Grill Master</Link><MenuButton handleClick={this.handleClick} /></h1>
        <NavItem link="/" display={true} icon={<IoFireball />} linkText="What's Hot"/>
        <NavItem link="/beer" display={this.props.user.id} icon={<IoBeer />} linkText="Beer"/>
        <NavItem link="/meat" display={this.props.user.id} icon={<MdRestaurant />} linkText="Meat"/> 


        <li className="nav-item profile">
          <ProfileDropdown toggleDropdown={this.toggleDropdown} dropdownActive={dropdownOpen} loggedIn={loggedIn} />
        </li>
      </nav>
    );
  }
}

const Nav = withRouter(connect(mapStateToProps, mapDispatchToProps)(ConnectedNav));

export default Nav;