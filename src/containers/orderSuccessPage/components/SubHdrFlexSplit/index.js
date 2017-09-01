import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  HdrVipInfo,
  DateInfo,
} from '../../components';

const SubHdrFlexSplit = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="date-invoice--phone-landscape packaging-info packaging-info__date-invoice">
      <HdrVipInfo />
      <DateInfo />
    </div>
  );
};


export default SubHdrFlexSplit;
