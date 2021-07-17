import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import Navbar from '../../components/Navbar';

const Home = lazy(() => import('../Home'));

const Main = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={(<Spinner animation="grow" role="status" />)}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
