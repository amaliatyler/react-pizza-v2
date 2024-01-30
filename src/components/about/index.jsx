import React from 'react';

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__text">
            <h2>About us</h2>
            <p>
              In just a couple of years, we have opened 6 outlets in different cities: Kazan,
              Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in
              other major cities of Russia.
            </p>
            <img src="/img/pizzas.svg" alt="Pizzas" />
            <p>
              The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees,
              smoothly performing work in order to receive / prepare / form / deliver customer
              orders on time.
            </p>
          </div>
          <img className="about__arrow" src="/icons/arrow.svg" alt="Arrow" />
          <div className="about__image">
            <img className="about__icon" src="icons/fries.png" alt="French fries icon" />
            <img src="/img/pepperoni.png" alt="Five pizzas" />
            <img className="about__icon" src="/icons/pizza.png" alt="Pizza icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
