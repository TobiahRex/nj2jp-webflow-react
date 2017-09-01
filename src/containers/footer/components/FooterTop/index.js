import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  FooterFirstCol,
  FooterAboutCol,
  FooterCustomerCol,
  FooterContactCol,
  FooterSocialCol,
} from '../';

const FooterTop = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="footer footer--desktop footer--phone-landscape footer--phone-portrait footer--tablet">
      <div className="container--desktop container--phone-landscape container--row-1 container--tablet footer__container">
        <FooterFirstCol />
        <FooterAboutCol />
      </div>
      <div className="container--dektop container--phone-landscape container--row-2 footer__container">
        <FooterCustomerCol />
        <FooterContactCol />
      </div>
      <div className="container--desktop container--phone-landscape container--tablet footer__container">
        <FooterSocialCol />
      </div>
    </div>
  );
};


export default FooterTop;
