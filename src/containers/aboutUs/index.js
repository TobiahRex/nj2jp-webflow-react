import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  HdrPage,
  AboutBlurb,
  HdrPage2,
  AboutMembers,
} from './components';

class AboutUs extends React.Component {
  static propTypes = propTypes

  constructor(props) {
    super(props);

    this.state = {
      x: '',
    };
  }

  componentDidMount() {
    WebflowJs(); // eslint-disable-line
  }

  render() {
    return (
      <body>
        <HdrPage />
        <AboutBlurb />
        <HdrPage2 />
        <AboutMembers />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript" />
        <script src="js/webflow.js" type="text/javascript" />
        <div>
          {/* <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] --> */}
        </div>
      </body>
    );
  }
}

export default AboutUs;
