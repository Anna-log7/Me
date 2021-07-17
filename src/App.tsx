import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Main from './views/Main';
import './App.scss';

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
