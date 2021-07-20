import React from 'react';

import Bubbles from './components/Bubbles';

import './index.scss';

const BUBBLE_AMOUNT = 20;

const Home = (): JSX.Element => (
  <section>
    {Array(20).fill(0).map(() => (
      <Bubbles />
    ))}
  </section>
);

export default Home;
