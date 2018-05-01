import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import index from './js/index';
import styles from './styles/main.scss';
import 'normalize.css';
import App from './components/App/App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);