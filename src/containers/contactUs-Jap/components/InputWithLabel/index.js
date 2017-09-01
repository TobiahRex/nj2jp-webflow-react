import React from 'react';

import { WebflowJs } from './assets/utils';

const InputWithLabel = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="name__container">
      <label className="name__label" htmlFor="name">お名前は何ですか
      </label>
      <input className="name__input w-input" data-name="Name" id="name" maxLength="256" name="name" placeholder="あなたの名前を入力してください" type="text" />
    </div>
  );
};


export default InputWithLabel;
