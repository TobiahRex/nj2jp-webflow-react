import React from 'react';
import FontAwesome from 'react-fontawesome';
import { WebflowJs } from './assets/utils';

const FooterSocialCol = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="footer__social-media social-media--desktop social-media--phone-landscape social-media--tablet">
      <h3 className="footer__heading">CONNTECT WITH US</h3>
      <div className="social-connect-grid">
        <div className="social-connect-grid social-connect-grid__icon">
          <a className="link-3" href="#">
            <FontAwesome name="facebook" size="2x" style={{ color: '#385a97' }} />
          </a>
        </div>
        <div className="social-connect-grid social-connect-grid__icon">
          <a className="link-3" href="#">
            <FontAwesome name="twitter" size="2x" style={{ color: '#385a97' }} />
          </a>
        </div>
      </div>
      <div className="social-connect-grid">
        <div className="social-connect-grid social-connect-grid__icon">
          <a className="link-3" href="#">
            <FontAwesome name="linkedin" size="2x" style={{ color: '#385a97' }} />
          </a>
        </div>
        <div className="social-connect-grid social-connect-grid__icon">
          <a className="link-3" href="#">
            <FontAwesome name="instagram" size="2x" style={{ color: '#385a97' }} />
          </a>
        </div>
      </div>
    </div>
  );
};


export default FooterSocialCol;
