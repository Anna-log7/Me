import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import './index.scss';

const colors = [
  '#e9c46a',
  '#f4a261',
  '#e76f51',
  // '#2a9d8f',
];

const Bubbles = () => {
  const slide = (randomVal: number) => keyframes`
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(${randomVal * 30}em, -30vh);
      opacity: 0;
    }
  `;

  const BubbleUnit = styled.div`
    color: ${colors[Math.floor(Math.random() * colors.length)]};
    box-shadow: 3rem 0 ${0.1 + Math.random() * 0.1}rem currentColor;
    animation: ${slide(Math.random() - 0.5)} 8s infinite;
    animation-delay: ${Math.random() * 8}s;
    left: ${Math.random() * 100}%;
  `;

  return (
    <BubbleUnit
      className="bubble"
    />
  );
};

export default Bubbles;
