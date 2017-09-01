import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  CardImg,
  CardBody,
} from '../../components';

const CardArticle = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="masonry-column masonry-column__news">
      <CardImg />
      <CardBody />
    </div>
  );
};


export default CardArticle;
