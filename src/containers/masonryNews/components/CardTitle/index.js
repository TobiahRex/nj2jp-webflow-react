import React from 'react';

import { WebflowJs } from './assets/utils';

const CardTitle = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <a className="masonry-column__news news--heading-link w-inline-block" href="http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/" rel="noopener noreferrer" target="_blank">
      <h3 className="content--header news__content">Air Sampling confirms secondhand vapor is harmless</h3>
    </a>
  );
};


export default CardTitle;
