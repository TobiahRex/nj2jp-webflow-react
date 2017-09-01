import React from 'react';
import FontAwesome from 'react-fontawesome';
import { WebflowJs } from './assets/utils';

const FooterSocialCol = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="footer__social-media">
      <h3 className="footer__heading">CONNTECT WITH US</h3>
      <div className="social-connect-grid">
        <div className="social-connect-grid social-connect-grid__icon">
          <a className="link-3" href="#">
            <FontAwesome name="facebook" />
          </a>
        </div>
        <div className="social-connect-grid social-connect-grid__icon">
          <a className="link-3" href="#">
            <FontAwesome name="twitter" />
          </a>
        </div>
      </div>
      <div className="social-connect-grid">
        <div className="social-connect-grid social-connect-grid__icon">
          <a className="link-3" href="#">
            <FontAwesome name="linkedin" />
          </a>
        </div>
        <div className="social-connect-grid social-connect-grid__icon">
          <a className="link-3" href="#">
            <FontAwesome name="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};


export default FooterSocialCol;
