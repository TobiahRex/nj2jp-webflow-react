import React from 'react';
import FontAwesome from 'react-fontawesome';

import { WebflowJs } from './assets/utils';

const LrgBtnBackHome = () => {
  WebflowJs(); //eslint-disable-line

  return (
  <a className="page-button__button-element w-button" data-ix="botton-transition" href="#"><FontAwesome name="angle-double-left" />{'\u00A0'} Back To Home Page
  </a>

  );
};


export default LrgBtnBackHome;
