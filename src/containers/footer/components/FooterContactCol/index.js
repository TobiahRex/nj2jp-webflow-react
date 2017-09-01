import React from 'react';
import FontAwesome from 'react-fontawesome';

import { WebflowJs } from './assets/utils';

const FooterContactCol = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="contact--tablet contant--phone-portrait conteact--desktop footer__contact">
      <h3 className="footer__heading">GET IN TOUCH
      </h3>
      <div className="footer__content">
        <div className="contact--table w-row">
          <div className="contact--table table--column w-col w-col-4">
            <p className="column--content">
              <FontAwesome name="phone" />
            </p>
            <p className="column--content">
              <FontAwesome name="envelope" />
            </p>
          </div>
          <div className="contact--table table--column w-col w-col-8">
            <a className="column--link-content" href="#">12345678899999
            </a>
            <a className="column--link-content" href="#">sales@nj2jp.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FooterContactCol;
