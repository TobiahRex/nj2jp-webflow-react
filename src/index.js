import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './webflow/webflow.css';
import WebflowComponent from './containers/contactUs-Jap/';

render(
  <WebflowComponent />,
  document.getElementById('app')
);
