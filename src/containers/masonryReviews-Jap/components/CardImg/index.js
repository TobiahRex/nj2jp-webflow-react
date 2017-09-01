import React from 'react';

import { WebflowJs } from './assets/utils';

const CardImg = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <img className="reviews-content__image" role="presentation" sizes="(max-width: 479px) 75vw, 195px" src="images/Screen-Shot-2017-07-03-at-15.08.41.png" srcSet="images/Screen-Shot-2017-07-03-at-15.08.41-p-500.png 500w, images/Screen-Shot-2017-07-03-at-15.08.41-p-800.png 800w, images/Screen-Shot-2017-07-03-at-15.08.41-p-1080.png 1080w, images/Screen-Shot-2017-07-03-at-15.08.41.png 1510w" width="194" />
  );
};


export default CardImg;
