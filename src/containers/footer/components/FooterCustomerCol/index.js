import React from 'react';

import { WebflowJs } from './assets/utils';

const FooterCustomerCol = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="footer__legal-pages legal-pages--desktop legal-pages--phone-portrait">
      <h3 className="footer__heading">CUSTOMER CARE
      </h3>
      <div className="footer__content">
        <a className="footer__nav nav--link" href="#">Shop
        </a>
        <a className="footer__nav nav--link" href="#">Privacy Policy
        </a>
        <a className="footer__nav nav--link" href="#">Terms &amp; Conditions
        </a>
        <a className="footer__nav nav--link" href="#">Shipping
        </a>
        <a className="footer__nav nav--link" href="#">Returns
        </a>
        <a className="footer__nav nav--link" href="#">Nicotine Disclamer
        </a>
      </div>
    </div>
  );
};


export default FooterCustomerCol;
