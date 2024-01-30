import React from 'react';

import lightning from './../../assets/img/Lightning.svg';
import Switch from '../Switch/Switch';

function Welcome() {
  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome__wrapper">
          <div className="welcome__info">
            <h1>
              The Fastest Pizza{' '}
              <span>
                <img src={lightning} alt="Lighting" />
              </span>{' '}
              Delivery
            </h1>
            <p>
              We will deliver juicy pizza for your family in 30 minutes, if the courier is late -
              pizza is free!
            </p>
            <p>Cooking process:</p>
            <a href="#" className="welcome__video">
              <img src="video.png" alt="video thumbnail" />
            </a>
            <Switch />
          </div>
          <div className="welcome__img">
            <img src="/icons/fries.png" alt="fries" className="welcome__icon" />
            <img src="/welcome.png" alt="" className="welcome__img" />
            <img src="/icons/pizza.png" alt="fries" className="welcome__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
