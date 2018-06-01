import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Nav from '../Nav/Nav';
import Page from '../Page/Page';

const AppContainer = () => (
  <div className="container" style={{height: '1000px'}}>
    <Nav />
    <div className="spacer">&nbsp;</div>
    <Page />
  </div>
);

export default DragDropContext(HTML5Backend)(AppContainer);