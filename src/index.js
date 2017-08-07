import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './webflow/webflow.css';
import WebflowComponent from './containers/footer/';

render(
  <WebflowComponent />,
  document.getElementById('app')
);
