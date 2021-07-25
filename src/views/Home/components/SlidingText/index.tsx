import React from 'react';

import './index.scss';

const SlidingText = (): JSX.Element => (
  <div className="sliding-text">
    <div className="letter letter__a">
      <div className="letter__a--left" />
      <div className="letter__a--middle" />
      <div className="letter__a--right" />
    </div>
    <div className="letter letter__n">
      <div className="letter__n--left" />
      <div className="letter__n--middle" />
      <div className="letter__n--right" />
    </div>
    <div className="letter letter__n">
      <div className="letter__n--left" />
      <div className="letter__n--middle" />
      <div className="letter__n--right" />
    </div>
    <div className="letter letter__a">
      <div className="letter__a--left" />
      <div className="letter__a--middle" />
      <div className="letter__a--right" />
    </div>
  </div>
);

export default SlidingText;
