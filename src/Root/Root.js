import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../js/store/store';
import AppContainer from '../components/AppContainer/AppContainer';

const Root = () => (
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>
);

export default Root;