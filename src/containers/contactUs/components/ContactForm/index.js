import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  InputWithLabel,
  TextAreaWithLabel,
  CheckBoxWithLabel,
  MdSendButton,
} from '../../components';

const ContactForm = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="main__body">
      <div className="main__body-form w-form">
        <form className="body__container" data-name="Email Form" id="wf-form-Email-Form" name="wf-form-Email-Form">
          <InputWithLabel />
          <TextAreaWithLabel />
          <CheckBoxWithLabel />
          <MdSendButton />
        </form>
      </div>
    </div>
  );
};


export default ContactForm;
