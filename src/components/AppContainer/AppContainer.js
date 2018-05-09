import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Page from '../Page/Page';

const AppContainer = () => (
  <div className="container" style={{height: '1000px'}}>
    <Nav />
    <div className="spacer">&nbsp;</div>
    <Page />
  </div>
);

export default AppContainer;