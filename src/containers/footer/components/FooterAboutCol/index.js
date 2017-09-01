import React from 'react';

import { WebflowJs } from './assets/utils';

const FooterAboutCol = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="about--desktop about--phone-portrait about--tablet footer__about">
      <h3 className="footer__heading">ABOUT
      </h3>
      <div className="footer__content">
        <p className="paragraph-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla
          <br /><br />Duis cursus, mi quis viverra ornare, eros
        </p>
      </div>
    </div>
  );
};


export default FooterAboutCol;
