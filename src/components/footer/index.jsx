import React from 'react';

import links from './data.json';

import instagram from './instagram.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <a className="footer__logo" href="/">
            pizzashop
          </a>
          <div className="footer__columns">
            {links.map((column) => (
              <ul key={column.id} className="footer-column">
                {column.links.map((linkItem, i) => (
                  <li key={i} className="footer__link">
                    <a href={linkItem[1]}>{linkItem[0]}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="footer__contacts">
          <a className="footer__number" href="tel:+79373335533">
            +7 (937) 333-55-33
          </a>
          <div className="footer__socials">
            <a href="#">
              <img src={instagram} alt="Instragram" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
