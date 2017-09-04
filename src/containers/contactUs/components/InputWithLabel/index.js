import React from 'react';

import { WebflowJs } from './assets/utils';

const InputWithLabel = ({
  labelValue,
  inputValue,
}) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="name__container">
      <label className="name__label" htmlFor="name">
        {labelValue}
      </label>
      <input
        className="name__input w-input"
        data-name="Name"
        id="name"
        maxLength="256"
        name="name"
        placeholder="Enter your name"
        type="text"
        value={inputValue}
      />
    </div>
  );
};


export default InputWithLabel;
