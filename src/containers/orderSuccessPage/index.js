import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  OrderInvoice,
} from './components';

class OrderSuccessPage extends React.Component {
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
        <OrderInvoice />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript" />
        <script src="js/webflow.js" type="text/javascript" />
      </div>
    );
  }
}

export default OrderSuccessPage;
