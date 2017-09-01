import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  CardTitle,
  CardAuthorDate,
  CardBlurb,
} from '../../components';

const CardBody = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div>
      <CardTitle />
      <CardAuthorDate />
      <CardBlurb />
    </div>
  );
};


export default CardBody;
