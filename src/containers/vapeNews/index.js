import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

class VapeNews extends React.Component {
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
    return (
      <body>
        <div className="news news__top-article">
          <div className="news__top-article w-container">
            <a className="w-inline-block" href="https://www.vapingpost.com/2017/01/24/japan-the-fear-of-secondhand-smoke-to-propagate-to-heat-not-burn-cigarettes/" rel="noopener noreferrer" target="_blank">
              <img className="news__top-article top-article--image" role="presentation" data-ix="fade-down" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" src="images/japan-1902834_1280-1021x580.jpg" srcSet="images/japan-1902834_1280-1021x580-p-500.jpeg 500w, images/japan-1902834_1280-1021x580-p-800.jpeg 800w, images/japan-1902834_1280-1021x580.jpg 1021w" />
            </a>
            <h1 className="news__top-article top-article--header w-clearfix" data-ix="fade-down-2">
              <a href="https://www.vapingpost.com/2017/01/24/japan-the-fear-of-secondhand-smoke-to-propagate-to-heat-not-burn-cigarettes/" rel="noopener noreferrer" target="_blank" data-ix="fade-down-2" className="link-10">Japan: The fear of secondhand smoke to propagate to heat-not-burn cigarettes?
              </a>
            </h1>
            <div className="news__top-article top-article--author" data-ix="fade-down-3">
              <img className="author__image" role="presentation" src="images/P1100442-150x150.jpg" width="31" />
              <p className="author__text text--top">By Jérôme Harlay
              </p>
            </div>
          </div>
        </div>
        <div className="news news__dual-articles">
          <div className="news__dual-articles w-container">
            <div className="dual-articles--left-article news__dual-articles">
              <a className="w-inline-block" href="https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/" rel="noopener noreferrer" target="_blank">
                <img className="left-article__image" role="presentation" data-ix="fade-down-4" sizes="(max-width: 479px) 100vw, (max-width: 767px) 48vw, (max-width: 991px) 349.4375px, 449px" src="images/japan-tobacco-harm-reduction-1021x580.jpg" srcSet="images/japan-tobacco-harm-reduction-1021x580-p-500.jpeg 500w, images/japan-tobacco-harm-reduction-1021x580-p-800.jpeg 800w, images/japan-tobacco-harm-reduction-1021x580.jpg 1021w" width="449" />
              </a>
              <h2 className="dual-articles__heading w-clearfix" data-ix="fade-down-5">
                <a href="https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/" rel="noopener noreferrer" target="_blank" data-ix="fade-down-5" className="link-6">Japan : steady decline of tobacco cigarettes
                </a>
              </h2>
              <div className="dual-articles__author" data-ix="fade-down-6">
                <img className="author__image" role="presentation" src="images/IMG_7048-1-150x150.jpg" width="31" />
                <p className="author__text">By Diane Caruana
                </p>
              </div>
            </div>
            <div className="dual-articles--right-article news__dual-articles">
              <a className="w-inline-block" href="https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/" rel="noopener noreferrer" target="_blank">
                <img className="right-article__image" role="presentation" data-ix="fade-down-4" sizes="(max-width: 479px) 100vw, (max-width: 767px) 48vw, (max-width: 991px) 349.4375px, 451.1875px" src="images/magnifying-glass-1607160_1920.jpg" srcSet="images/magnifying-glass-1607160_1920-p-500.jpeg 500w, images/magnifying-glass-1607160_1920-p-1080.jpeg 1080w, images/magnifying-glass-1607160_1920-p-1600.jpeg 1600w, images/magnifying-glass-1607160_1920.jpg 1920w" />
              </a>
              <h2 className="dual-articles__heading w-clearfix" data-ix="fade-down-5">
                <a href="https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/" rel="noopener noreferrer" target="_blank" data-ix="fade-down-5" className="link-7">10 scientific facts about vaping a vaper should know
                </a>
              </h2>
              <div className="dual-articles__author" data-ix="fade-down-6">
                <img className="author__image" role="presentation" src="images/P1100442-150x150.jpg" width="27" />
                <p className="author__text">By Jérôme Harlay
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-07-18-at-21.42.05.png" srcSet="images/Screen-Shot-2017-07-18-at-21.42.05-p-500.png 500w, images/Screen-Shot-2017-07-18-at-21.42.05.png 774w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0" rel="noopener noreferrer" target="_blank" className="news-main-feed__article-header-link">Japan Tobacco playing catchup as nation takes to vaping in big way
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0" rel="noopener noreferrer" target="_blank" className="news-mainfeed__article-content-link">Competition to sate Japanese nicotine addicts is heating up.
                </a>
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" src="images/P1100442-150x150.jpg" width="27" />
                <p className="author__text">By Jérôme Harlay
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 84vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-07-18-at-21.47.36.png" srcSet="images/Screen-Shot-2017-07-18-at-21.47.36-p-500.png 500w, images/Screen-Shot-2017-07-18-at-21.47.36.png 704w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2" rel="noopener noreferrer" target="_blank" className="news-main-feed__article-header-link">Philip Morris, Japan Tobacco to open more vape stores nationwide
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2" rel="noopener noreferrer" target="_blank" className="news-mainfeed__article-content-link">Philip Morris Japan Ltd. said Thursday that it will open a store in Tokyo’s Ginza district on Friday to sell its smokeless tobacco device iQOS
                </a>
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" sizes="(max-width: 479px) 25px, 31px" src="images/Screen-Shot-2017-07-03-at-15.08.41.png" srcSet="images/Screen-Shot-2017-07-03-at-15.08.41-p-500.png 500w, images/Screen-Shot-2017-07-03-at-15.08.41-p-800.png 800w, images/Screen-Shot-2017-07-03-at-15.08.41-p-1080.png 1080w, images/Screen-Shot-2017-07-03-at-15.08.41.png 1510w" width="27" />
                <p className="author__text">By Jiji Nakamura
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="http://www.churnmag.com/news/absurdity-finest-new-war-vaping-goes-science/" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-08-05-at-16.34.57.png" srcSet="images/Screen-Shot-2017-08-05-at-16.34.57-p-500.png 500w, images/Screen-Shot-2017-08-05-at-16.34.57-p-800.png 800w, images/Screen-Shot-2017-08-05-at-16.34.57-p-1080.png 1080w, images/Screen-Shot-2017-08-05-at-16.34.57.png 1236w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="http://www.churnmag.com/news/absurdity-finest-new-war-vaping-goes-science/" rel="noopener noreferrer" target="_blank" className="news-main-feed__article-header-link">The New War Against Vaping Goes Against Science
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="http://www.churnmag.com/news/absurdity-finest-new-war-vaping-goes-science/" rel="noopener noreferrer" target="_blank" className="news-mainfeed__article-content-link">Special interest groups are forcing personal beliefs against science, yet again.
                </a>
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" src="images/164d5d493e2e59b4c01fac05c2aed910.jpeg" width="27" />
                <p className="author__text">By Jimmy Hafrey
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 83vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-07-17-at-14.00.26.png" srcSet="images/Screen-Shot-2017-07-17-at-14.00.26-p-500.png 500w, images/Screen-Shot-2017-07-17-at-14.00.26-p-800.png 800w, images/Screen-Shot-2017-07-17-at-14.00.26.png 974w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/" rel="noopener noreferrer" target="_blank" className="news-main-feed__article-header-link">More data confirms that vaping is a safer alternative to smoking
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/" rel="noopener noreferrer" target="_blank" className="news-mainfeed__article-content-link">A new study which found no evidence that vaping products may propagate cancer
                  <br />
                </a>.
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" src="images/P1100442-150x150.jpg" width="27" />
                <p className="author__text">By Jérôme Harlay
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 89vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-07-16-at-21.58.42.png" srcSet="images/Screen-Shot-2017-07-16-at-21.58.42-p-500.png 500w, images/Screen-Shot-2017-07-16-at-21.58.42.png 662w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/" rel="noopener noreferrer" target="_blank" className="news-main-feed__article-header-link">Air Sampling confirms secondhand vapor is harmless
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/" rel="noopener noreferrer" target="_blank" className="news-mainfeed__article-content-link">The CDPH has been carrying out air sampling in vape shops
                </a>
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" src="images/IMG_7048-1-150x150.jpg" width="27" />
                <p className="author__text">By Diane Caruana
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-07-18-at-21.52.22.png" srcSet="images/Screen-Shot-2017-07-18-at-21.52.22-p-500.png 500w, images/Screen-Shot-2017-07-18-at-21.52.22.png 800w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/" rel="noopener noreferrer" target="_blank" className="news-main-feed__article-header-link">PMI CEO talks about phasing out cigarettes in Japan &amp; S. Korea
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/" rel="noopener noreferrer" target="_blank" className="news-mainfeed__article-content-link">PMI’s&nbsp;iQOS device, is a smokeless alternative to combustible cigarettes
                </a>
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" src="images/IMG_7048-1-150x150.jpg" width="27" />
                <p className="author__text">By Diane Caruana
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-07-17-at-14.05.19.png" srcSet="images/Screen-Shot-2017-07-17-at-14.05.19-p-500.png 500w, images/Screen-Shot-2017-07-17-at-14.05.19-p-800.png 800w, images/Screen-Shot-2017-07-17-at-14.05.19.png 828w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/" rel="noopener noreferrer" target="_blank" className="news-main-feed__article-header-link">Study from Spain confirms effectivity of e-cigarettes
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/" rel="noopener noreferrer" target="_blank" className="news-mainfeed__article-content-link">Recent data obtained from a Spanish study indicates that e-cigarettes are excellent harm reduction tools for smoking cessation.
                </a>
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" src="images/IMG_7048-1-150x150.jpg" width="27" />
                <p className="author__text">By Diane Caruana
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-07-18-at-18.45.16.png" srcSet="images/Screen-Shot-2017-07-18-at-18.45.16-p-500.png 500w, images/Screen-Shot-2017-07-18-at-18.45.16-p-800.png 800w, images/Screen-Shot-2017-07-18-at-18.45.16-p-1080.png 1080w, images/Screen-Shot-2017-07-18-at-18.45.16.png 1088w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/" rel="noopener noreferrer" target="_blank" className="news-main-feed__article-header-link">Shocking Penn State Study on Vaping and Cigarettes
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/" rel="noopener noreferrer" target="_blank" className="news-mainfeed__article-content-link">A new study out shows that people who use vape devices are less addicted to vaping than traditional smokers.
                </a>
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" src="images/164d5d493e2e59b4c01fac05c2aed910.jpeg" width="27" />
                <p className="author__text">By Jimmy Hafrey</p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-07-18-at-18.49.34.png" srcSet="images/Screen-Shot-2017-07-18-at-18.49.34-p-500.png 500w, images/Screen-Shot-2017-07-18-at-18.49.34-p-800.png 800w, images/Screen-Shot-2017-07-18-at-18.49.34.png 926w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/" target="_blank" rel="noopener noreferrer" className="news-main-feed__article-header-link">New Study Shows Vaping Less Harmful Again
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/" target="_blank" rel="noopener noreferrer" className="news-mainfeed__article-content-link">A study done by a Big Tobacco company has proven yet again that vaping is less harmful than smoking traditional cigarettes.
                </a>
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" src="images/164d5d493e2e59b4c01fac05c2aed910.jpeg" width="27" />
                <p className="author__text">By Jimmy Hafrey
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-07-17-at-13.45.14.png" srcSet="images/Screen-Shot-2017-07-17-at-13.45.14-p-500.png 500w, images/Screen-Shot-2017-07-17-at-13.45.14-p-800.png 800w, images/Screen-Shot-2017-07-17-at-13.45.14-p-1080.png 1080w, images/Screen-Shot-2017-07-17-at-13.45.14.png 1126w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/" target="_blank" rel="noopener noreferrer" className="news-main-feed__article-header-link">3 facts smokers should know about vaping
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/" target="_blank" rel="noopener noreferrer" className="news-mainfeed__article-content-link">Just a few years ago electronic cigarettes were uncommon, hard to find and a mystery to most people. Now they’re everywhere – but, it turns out, they’re still a mystery to most people.
                </a>
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" src="images/fergus-mason-vapingpost-journalist.jpg" width="27" />
                <p className="author__text">By Fergus Mason
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news news__main-feed" data-ix="pop-in">
          <div className="news__main-feed w-container">
            <a className="link-block w-inline-block" href="https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/" rel="noopener noreferrer" target="_blank">
              <img className="news__image" role="presentation" sizes="(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px" src="images/Screen-Shot-2017-07-17-at-13.42.40.png" srcSet="images/Screen-Shot-2017-07-17-at-13.42.40-p-500.png 500w, images/Screen-Shot-2017-07-17-at-13.42.40.png 680w" />
            </a>
            <div className="main-feed--content news__main-feed">
              <h2 className="content--heading main-feed__content">
                <a href="https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/" target="_blank" rel="noopener noreferrer" className="news-main-feed__article-header-link">Michigan US : Smoking on decline partly thanks to e-cigs
                </a>
              </h2>
              <p className="content--text main-feed__content">
                <a href="https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/" target="_blank" rel="noopener noreferrer" className="news-mainfeed__article-content-link">Both the number of smokers and the rates of lung cancer are on the decline, partly thanks to the advent of electronic cigarettes.
                </a>
              </p>
              <div className="dual-articles__author">
                <img className="author__image" role="presentation" src="images/IMG_7048-1-150x150.jpg" width="27" />
                <p className="author__text">By Diane Caruana
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
        }

export default VapeNews;
