import React, { useState, useEffect } from 'react';
import Fade from 'react-bootstrap/Fade';
import Container from 'react-bootstrap/Container';

import OpaqueCard from '../../components/OpaqueCard';

import './index.scss';

const Home = (): JSX.Element => {
  const [sectionShown, setSectionShown] = useState(0);

  return (
    <section className="home">
      <Container className="home__intro">
        <Fade
          appear
          in={sectionShown === 0}
          mountOnEnter
          timeout={1000}
        >
          <OpaqueCard
            body="Hi, I'm Anna Davies"
            centeredText
          />
        </Fade>
      </Container>
      <Container className="home__intro">
        <Fade
          appear
          in
          mountOnEnter
          timeout={1000}
        >
          <OpaqueCard
            body="This is my site"
            centeredText
          />
        </Fade>
      </Container>
    </section>
  );
};

export default Home;
