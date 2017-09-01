import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  FooterTop,
  FooterBottom,
} from './components';

class Footer extends React.Component {
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
      <body className="body-5">
        <FooterTop />
        <FooterBottom />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript" />
        <script src="js/webflow.js" type="text/javascript" />
      </body>
    );
  }
}

export default Footer;
