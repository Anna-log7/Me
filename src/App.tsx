import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './views/Main';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
