import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from '../js/store/store';
import App from '../components/App/App';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;