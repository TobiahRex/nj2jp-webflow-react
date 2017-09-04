import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  InputWithLabel,
  TextAreaWithLabel,
  CheckBoxWithLabel,
  MdSendButton,
} from '../../components';

const ContactForm = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="main__body">
      <div className="main__body-form w-form">

        <form
          className="body__container"
          data-name="Email Form"
          id="wf-form-Email-Form"
          name="wf-form-Email-Form"
        >{props.children}</form>

      </div>
    </div>
  );
};

const { objectOf, any } = PropTypes;
ContactForm.propTypes = {
  children: objectOf(any).isRequired,
};

export default ContactForm;
