import React from 'react';

import { WebflowJs } from './assets/utils';

const FaqListItem = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="container--text faq__conatiner">
      <p className="container__text text--header">Why can’t I buy more than 4 bottles?</p>
      <p className="container__text text-content">Japanese law requires no more than 120 mililiters of nicotine juice to be sold to individual, per address, within 1 month.</p>
    </div>
  );
};


export default FaqListItem;
