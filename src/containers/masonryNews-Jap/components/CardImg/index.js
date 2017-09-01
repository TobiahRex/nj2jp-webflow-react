import React from 'react';

import { WebflowJs } from './assets/utils';

const CardImg = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <img className="masonry-container__news news--image" role="presentation" src="images/masonry1.png" />
  );
};


export default CardImg;
