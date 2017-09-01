import React from 'react';

import { WebflowJs } from './assets/utils';

const HdrPage = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div>
      <div className="about-container about-container__heading w-container">
        <h1 className="about-container__heading">About
        </h1>
      </div>
    </div>
  );
};


export default HdrPage;
