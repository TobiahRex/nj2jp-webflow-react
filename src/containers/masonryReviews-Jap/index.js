import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  CardReview,
} from './components';

class MasonryReviews extends React.Component {
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
    const cardsData = [{
      image: {
        src: 'images/Screen-Shot-2017-07-03-at-15.08.41.png',
        srcSet: 'images/Screen-Shot-2017-07-03-at-15.08.41-p-500.png 500w, images/Screen-Shot-2017-07-03-at-15.08.41-p-800.png 800w, images/Screen-Shot-2017-07-03-at-15.08.41-p-1080.png 1080w, images/Screen-Shot-2017-07-03-at-15.08.41.png 1510w',
        width: '194',
      },
      title: 'それは難しくない。 ただ違う。',
    },
    {
      image: {
        src: 'images/Screen-Shot-2017-07-18-at-18.55.10.png',
        srcSet: 'images/Screen-Shot-2017-07-18-at-18.55.10-p-500.png 500w, images/Screen-Shot-2017-07-18-at-18.55.10.png 1084w',
        width: '194',
      },
      title: '私は本当に味が大好き',
    },
    {
      image: {
        src: 'images/1155228157481.jpg',
        srcSet: '',
        width: '194',
      },
      title: '私は本当に味が大好きです',
    },
    {
      image: {
        src: 'images/Screen-Shot-2017-07-03-at-15.09.56.png',
        srcSet: 'images/Screen-Shot-2017-07-03-at-15.09.56-p-500.png 500w, images/Screen-Shot-2017-07-03-at-15.09.56-p-800.png 800w, images/Screen-Shot-2017-07-03-at-15.09.56-p-1080.png 1080w, images/Screen-Shot-2017-07-03-at-15.09.56.png 1500w',
        width: '108',
      },
      title: '私の結婚を救った',
    }]
    return (
      <div className="masonry-container w-container">
        <div className="masonry-column">
          <div className="masonry-container masonry-container__news">
            <CardReview />
          </div>
        </div>
      </div>
    );
  }
}

export default MasonryReviews;
