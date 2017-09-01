import React from 'react';
import FontAwesome from 'react-fontawesome';

import { WebflowJs } from './assets/utils';

const EmptyCartBody = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div>
      <div className="shopping-cart--font-image shopping-cart__image">
        <FontAwesome name="shopping-basket" />
      </div>
      <h2 className="h2--text shopping-cart__content">おっとっと 🙁</h2>
      <p className="content--text shopping-cart__content">ショッピングカートに商品がありません。</p>
    </div>
  );
};


export default EmptyCartBody;
