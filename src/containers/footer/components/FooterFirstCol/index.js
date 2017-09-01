import React from 'react';

import { WebflowJs } from './assets/utils';

const FooterFirstCol = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="footer__nav nav--desktop nav--phone-portrait">
      <h3 className="footer__heading">NJ2JP
      </h3>
      <div className="footer__content">
        <a className="footer__nav nav--link" href="#">About
        </a>
        <a className="footer__nav nav--link" href="#">FAQ
        </a>
        <a className="footer__nav nav--link" href="#">Wholesale
        </a>
        <a className="footer__nav nav--link" href="#">Site Map
        </a>
      </div>
    </div>
  );
};


export default FooterFirstCol;
