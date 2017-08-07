import React from 'react';
import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

className Banner extends React.Component {
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
      <div>
        <div className="footer">
          <div className="container--row-1 footer__container">
            <div className="footer__nav">
              <h3 className="footer__heading">NJ2JP</h3>
              <div className="footer__content"><a className="footer__nav nav--link" href="#">About</a><a className="footer__nav nav--link" href="#">FAQ</a><a className="footer__nav nav--link" href="#">Wholesale</a><a className="footer__nav nav--link" href="#">Site Map</a></div>
            </div>
            <div className="footer__about">
              <h3 className="footer__heading">ABOUT</h3>
              <div className="footer__content">
                <p className="paragraph-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla<br><br>Duis cursus, mi quis viverra ornare, eros</p>
                </div>
                </div>
              </div>
              <div className="container--row-2 footer__container">
                <div className="footer__legal-pages">
                  <h3 className="footer__heading">CUSTOMER CARE</h3>
                  <div className="footer__content"><a className="footer__nav nav--link" href="#">Shop</a><a className="footer__nav nav--link" href="#">Privacy Policy</a><a className="footer__nav nav--link" href="#">Terms &amp; Conditions</a><a className="footer__nav nav--link" href="#">Shipping</a><a className="footer__nav nav--link" href="#">Returns</a><a className="footer__nav nav--link" href="#">Nicotine Disclamer</a></div>
                  </div>
                    <div className="footer__contact">
                      <h3 className="footer__heading">GET IN TOUCH</h3>
                      <div className="footer__content">
                        <div className="contact--table w-row">
                          <div className="contact--table table--column w-col w-col-4">
                            <p className="column--content"></p>
                            <p className="column--content"></p>
                          </div>
                          <div className="contact--table table--column w-col w-col-8"><a className="column--link-content" href="#">12345678899999</a><a className="column--link-content" href="#">sales@nj2jp.com</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer__social-media">
                    <h3 className="footer__heading">CONNTECT WITH US</h3>
                    <div className="social-connect-grid">
                      <div className="social-connect-grid social-connect-grid__icon"><a className="link-3" href="#"></a></div>
                      <div className="social-connect-grid social-connect-grid__icon"><a className="link-3" href="#"></a></div>
                    </div>
                    <div className="social-connect-grid">
                      <div className="social-connect-grid social-connect-grid__icon"><a className="link-3" href="#"></a></div>
                      <div className="social-connect-grid social-connect-grid__icon"><a className="link-3" href="#"></a></div>
                    </div>
                  </div>
                </div>
                <div className="footer-2">
                  <div className="footer__bottom">
                    <div className="bottom--content footer__bottom w-row">
                      <div className="content--column-left footer__content w-col w-col-6 w-col-tiny-6">
                        <p className="column-left__text">Copyright &nbsp;2017</p>
                      </div>
                      <div className="content--clumn-right footer__content w-col w-col-6 w-col-tiny-6">
                        <p className="column-right__text">Made with <em className="emphasized-text-6"></em>&nbsp;by @TobiahRex</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
              }
              }

              export default Banner;
