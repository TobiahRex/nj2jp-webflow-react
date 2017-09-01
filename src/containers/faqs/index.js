import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  Header,
  FaqList,
  // FaqListItem,
} from './components';

class Faqs extends React.Component {
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

  renderFaqList = () => {}

  render() {
    const {
      faqList,
    } = this.state;

    return (
      <div>
        <div className="faq__conatiner w-container">
          <Header />
          <FaqList>
            {this.renderFaqList(faqList)}
          </FaqList >
        </div>
      </div>
    );
  }
}

export default Faqs;
