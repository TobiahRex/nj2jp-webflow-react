import React from 'react';
import FontAwesome from 'react-fontawesome';
import { WebflowJs } from './assets/utils';

const MdSendButton = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="body__send-copy--container">
      <a className="body__submit--button w-button" href="#">
        <FontAwesome name="send" />&nbsp;&nbsp;
        Send
      </a>
    </div>
  );
};


export default MdSendButton;
