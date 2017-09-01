import React from 'react';
import FontAwesome from 'react-fontawesome';
import { WebflowJs } from './assets/utils';

const InvoiceHdr = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div>
      <div className="order-success__header--mobile-land order-success__image w-container">
        <p className="order-sucsess--image">
          <FontAwesome name="check-circle" />
        </p>
        <div className="order-success__text">
          <h1 className="content--tablet order-success__image order-success__title">Order successfully submitted
          </h1>
          <p className="content--mobile-land content--mobile-port content--tablet order-success__content order-success__image">The invoice below has been sent to your email.
          </p>
          <p className="content--mobile-land content--mobile-port content--tablet order-success__content order-success__image">You will receive your Tracking # via email, once your order has been shipped.
          </p>
        </div>
      </div>
    </div>
  );
};


export default InvoiceHdr;
