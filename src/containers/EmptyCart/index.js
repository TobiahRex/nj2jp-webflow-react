import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  HdrPage,
  EmptyCartBody,
  LrgBtnBackHome,
} from './components';

class EmptyCart extends React.Component {
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
        <div className="shopping-cart__content w-container">
          <HdrPage />
          <EmptyCartBody />
          <LrgBtnBackHome />
        </div>
      </div>
    );
  }
}

export default EmptyCart;
