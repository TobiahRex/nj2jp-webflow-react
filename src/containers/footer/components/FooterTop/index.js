import React from 'react';

import {
  FooterFirstCol,
  FooterAboutCol,
  FooterCustomerCol,
  FooterContactCol,
  FooterSocialCol,
} from '../';

import { WebflowJs } from './assets/utils';

const FooterTop = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="footer">
      <div className="container--row-1 footer__container">
        <FooterFirstCol />
        <FooterAboutCol />
      </div>
      <div className="container--row-2 footer__container">
        <FooterCustomerCol />
        <FooterContactCol />
      </div>
      <FooterSocialCol />
    </div>
  );
};


export default FooterTop;
