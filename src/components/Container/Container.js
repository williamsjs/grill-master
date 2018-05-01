import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Page from '../Page/Page';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = { menuOpen: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render() {
    return (
      <div className="container" style={{height: '1000px'}}>
        <Nav menuOpen={this.state.menuOpen}  handleClick={this.handleClick} />
        <div className="spacer">&nbsp;</div>
        <Page menuOpen={this.state.menuOpen} />
      </div>
    );
  }
}