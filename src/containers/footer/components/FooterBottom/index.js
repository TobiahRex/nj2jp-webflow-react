import React from 'react';
import FontAwesome from 'react-fontawesome';

import { WebflowJs } from './assets/utils';

const FooterBottom = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="footer-2">
      <div className="footer__bottom">
        <div className="bottom--content footer__bottom w-row">
          <div className="content--column-left footer__content w-col w-col-6 w-col-tiny-6">
            <p className="column-left__text">Copyright
              <FontAwesome name="copyright" />
            &nbsp;2017</p>
          </div>
          <div className="content--clumn-right footer__content w-col w-col-6 w-col-tiny-6">
            <p className="column-right__text">Made with
              <em className="emphasized-text-6" />&nbsp;by @TobiahRex</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FooterBottom;
