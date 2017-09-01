import React from 'react';
import FontAwesome from 'react-fontawesome';

import { WebflowJs } from './assets/utils';

const FooterBottom = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="footer-2">
      <div className="footer__bottom">
        <div className="content--phone-landscape footer-2__content">
          <div className="footer-2__text text--phone-landscape">
            <p className="column-left__text text--phone-landscape text--phone-portrait text--tablet">Copyright
              <FontAwesome name="copyright" />
              &nbsp;2017
            </p>
            <p className="column-right__text text--phone-landscape text--tablet text-phone-portrait">Made with
              <em className="emphasized-text-6">
                <FontAwesome name="heart" />
              </em>&nbsp;by Stackinet LLC. Development Team
            </p>
          </div>
          <img className="footer__payments--image image--phone-landscape image--phone-portrait image--tablet" role="presentation" sizes="(max-width: 479px) 95vw, (max-width: 767px) 72vw, (max-width: 991px) 60vw, 28vw" src="images/square-ssl-logo-long-2---black.png" srcSet="images/square-ssl-logo-long-2---black-p-500.png 500w, images/square-ssl-logo-long-2---black.png 765w" width="144" />
        </div>
      </div>
    </div>
  );
};


export default FooterBottom;
