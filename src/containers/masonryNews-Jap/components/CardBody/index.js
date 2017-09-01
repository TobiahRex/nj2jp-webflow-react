import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  CardTitle,
  CardBlurb,
  CardMoreLink,
} from '../../components';

const CardBody = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="masonry-column__news news--content">
      <CardTitle />
      <CardBlurb />
      <CardMoreLink />
    </div>
  );
};


export default CardBody;
