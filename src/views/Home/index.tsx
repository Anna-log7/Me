import React from 'react';

import Bubbles from './components/Bubbles';

import './index.scss';

const BUBBLE_AMOUNT = 20;

const Home = (): JSX.Element => (
  <section className="home">
    <div className="home__bubbles">
      {Array(BUBBLE_AMOUNT).fill(0).map(() => (
        <Bubbles />
      ))}
    </div>
  </section>
);

export default Home;
