import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  CardImg,
  CardBody,
} from '../../components';

const CardReview = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="reviews__content">
      <CardImg />
      <CardBody />
    </div>
  );
};


export default CardReview;
