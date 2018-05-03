import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Root from './Root/Root';
import index from './js/index';
import styles from './styles/main.scss';
import 'normalize.css';

render(
  <Root />, 
  document.getElementById('root')
);