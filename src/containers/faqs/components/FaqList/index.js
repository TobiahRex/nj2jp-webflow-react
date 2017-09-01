import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  FaqListItem,
} from '../';

const list = [{
  header: 'What address should I use if I’m SOFA and live on a military base?',
  content: 'Many of our SOFA sponsored members use friends addresses who live off base.&nbsp; Alternatively, every building (including the on base post office) has a Japanese address on military bases in&nbsp;Japan.&nbsp; We recommend you ask your post office for their Japanese (“off-base”) address and&nbsp;then you can use your postal box # to have the package assigned to your postal box and&nbsp;receive your juice.',
}, {
  header: 'When will you get more flavors?',
  content: 'Our flavor inventory will be expanding in the coming months.&nbsp; We’ve currently partnered with VapeSwitch @&nbsp;<a href="http://www.vapeswitch.com" target="_blank" rel="noopener noreferrer">http://www.vapeswitch.com</a>&nbsp;and offer their 6 delicious falvors as we launch our&nbsp;business. Their juices are made at the #1 ranked e-juice factory in the World at Molecule Labs. We’re supremely confident you will find these 6 flavors totally addicting. Stay tuned fornewletter updates for future additional e-juices.',
}, {
  header: 'Why do you only sell vape juice and not all vape equipment &amp; accessories?',
  content: 'We specialize in delivering nicotine vape juice to Japan faster than ANY competition in Japan.  We’re highly committed and devoted to performing this highly rare and difficult task to the  best of our ability and therefore devote 100 % of our resources and attention to that.  We  recommend purchasing all your vaping gear and needed accessories at our partners’ website <a href="http://vapeswitch.com" />.',
}];

const FaqList = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div>
      <FaqListItem />
    </div>
  );
};


export default FaqList;
