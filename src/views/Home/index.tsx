import React from 'react';
import Card from 'react-bootstrap/Card';

import './index.scss';

const Home = (): JSX.Element => {
  return (
    <section>
      <Card>
        <Card.Body>
          <Card.Title>Hi, I'm Anna</Card.Title>
          <Card.Text>
            I'm a web developer and this is my resume site
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Home;
