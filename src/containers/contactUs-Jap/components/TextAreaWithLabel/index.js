import React from 'react';

import { WebflowJs } from './assets/utils';

const TextAreaWithLabel = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="message__container">
      <label className="message__label" htmlFor="message-field">メッセージ
      </label>
      <textarea className="message__input w-input" data-name="message field" id="message-field" maxLength="5000" name="message-field" placeholder="何を私たちに伝えたいですか？" required="required" resize="vertical" />
    </div>
  );
};


export default TextAreaWithLabel;
