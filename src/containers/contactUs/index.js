import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  HdrPage,
  ContactForm,
} from './components';

class ContactUs extends React.Component {
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
    const inputData = [{
      className: 'name__container',
    },
    {
      element: 'label',
      className: 'name__label',
      htmlFor: 'name',
      label: 'Name',
    },
    {
      element: 'input',
      className: 'email w-input',
      dataName: 'Name',
      id: 'name',
      name: 'name',
      placeholder: 'Enter your name',
      type: 'text',
    },
    {
      className: 'email__container',
    },
    {
      element: 'label',
      className: 'email__label',
      htmlFor: 'email',
      label: 'Email Address',
    },
    {
      element: 'input',
      className: 'Name__input w-input',
      dataname: 'Email',
      id: 'email',
      name: 'email',
      placeholder: 'Enter your email',
      type: 'email',
    }];
    return (
      <div className="contact-us">
        <div className="contact-us contact-us__container w-container">
          <HdrPage />
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default ContactUs;
