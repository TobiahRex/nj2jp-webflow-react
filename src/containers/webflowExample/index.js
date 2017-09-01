import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

class Banner extends React.Component {
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
      <div className="banner">
        <h1> test </h1>
      </div>
    );
  }
}

export default Banner;
