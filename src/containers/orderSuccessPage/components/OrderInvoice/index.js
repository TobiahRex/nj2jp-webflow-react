import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  InvoiceHdr,
  SubHdrFlexSplit,
  SubHdrItalic,
} from '../../components';

const OrderInvoice = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div>
      <InvoiceHdr />
      <div>
        <div className="packaging-info w-container">
          <div className="packaging-info packaging-info__orderprice">
            <SubHdrFlexSplit />
            <SubHdrItalic />
            <div className="order-details--phone-landscape packaging-info packing-info__order-details">
              <p className="order-details order-details__order-no">Order #: [order-no]
              </p>
              <p className="order-details order-details__price">Price [order-total]
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="address__row w-container">
          <div className="address__ship-to ship-to--content">
            <h3 className="address__row row--ship-to ship-to__desktop ship-to__tablet">Ship To
            </h3>
            <p className="address__ship-to content--paragraph ship-to--content">First, Last,&nbsp;
              <br />Address City,&nbsp;
              <br />Prefecture&nbsp;
              <br />Postal Code&nbsp;
              <br />Japan&nbsp;
              <br />Telephone
            </p>
          </div>
          <div className="address__bill-to bill-to--content">
            <h3 className="address__row bill-to__desktop bill-to__tablet row--bill-to">Bill To
            </h3>
            <p className="address__ship-to content--paragraph ship-to--content">First, Last,&nbsp;
              <br />Address City,&nbsp;
              <br />Prefecture&nbsp;
              <br />Postal Code&nbsp;
              <br />Japan&nbsp;
              <br />Telephone
              <br />
              <br />
              <br />
              <br />Card Type **************** 1234
            </p>
          </div>
        </div>
      </div>
      <div className="section-5">
        <div className="order-summary-container w-container">
          <div className="order-summary order-summary__container">
            <h3 className="order-summary order-summary__title title--desktop title--phone-portrait tittle-phone-landscape">Order Summary
            </h3>
            <div className="order-summary order-summary__top-row">
              <h4 className="order-summary__top-row top-row__title-qty">Qty
              </h4>
              <h4 className="order-summary__top-row top-row--juice-desc">Juice Description
              </h4>
              <h4 className="order-summary__top-row top-row--price">Price
              </h4>
            </div>
            <div className="order-summary order-summary__tracking">
              <p className="order-summary__tracking tracking-content">&lt;Shipping Status&gt; - Tracking #:
                <a className="link">(tracking-no)
                </a>
              </p>
            </div>
            <div className="order-summary order-summary--content">
              <p className="content--qty order-summary__content">{1}
              </p>
              <div className="content--description order-summary__content w-richtext">
                <h5>Fruity Bamm-Bamm [product-title]
                </h5>
                <p>Nicotine Strength: 6mg [nicotine-str]
                </p>
                <p>SKU: FVVV11000001 [sku]
                </p>
              </div>
              <p className="content--price order-summary__content">$[price]
              </p>
            </div>
            <div className="order-summary order-summary--content">
              <p className="content--qty order-summary__content">{1}
              </p>
              <div className="content--description order-summary__content w-richtext">
                <h5>Fruity Bamm-Bamm [product-title]
                </h5>
                <p>Nicotine Strength: 6mg [nicotine-str]
                </p>
                <p>SKU: FVVV11000001 [sku]
                </p>
              </div>
              <p className="content--price order-summary__content">$[price]
              </p>
            </div>
            <div className="order-summary order-summary__total">
              <p className="order-summary__total total--total-text">Sub Total
                <br />Tax
                <br />Free International Shipping
                <br />Order Total
              </p>
              <p className="order-summary__total total--price">$[sub-total]
                <br />$[tax]
                <br />$[shipping]
                <br />$[order-total]
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="page-button w-container">
          <a className="button-element--phone page-button__button-element w-button" href="#">
            <em className="page-button--font-awesome-icon">
            </em> Back to Home Page
          </a>
        </div>
      </div>
    </div>
  );
};


export default OrderInvoice;
