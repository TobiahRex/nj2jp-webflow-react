import React from 'react';

import { WebflowJs } from './assets/utils';

const CheckBoxWithLabel = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="body__send-copy--container container--checkbox w-checkbox">
      <input className="w-checkbox-input" data-name="Checkbox" id="checkbox" name="checkbox" type="checkbox" />
      <label className="body__send-copy w-form-label" htmlFor="checkbox">このメールのコピーを自分宛てに送信する
      </label>
    </div>
  );
};


export default CheckBoxWithLabel;
