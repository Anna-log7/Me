import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import Navbar from '../../components/Navbar';

import './index.scss';

const Home = lazy(() => import('../Home'));

const Main = (): JSX.Element => (
  <div className="main">
    <Navbar />
    <div className="main__content">
      <Suspense fallback={(<Spinner animation="grow" role="status" />)}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </div>
  </div>
);

export default Main;
