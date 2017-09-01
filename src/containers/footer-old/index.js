import React from 'react';
import FontAwesome from 'react-fontawesome';
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
      <div>
        <FooterTop />
        <FooterBottom />
      </div>
    );
  }
}

export default Footer;
