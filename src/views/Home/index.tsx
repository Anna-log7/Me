import React, { useState, useEffect, useRef } from 'react';
import Fade from 'react-bootstrap/Fade';
import Container from 'react-bootstrap/Container';

import OpaqueCard from '../../components/OpaqueCard';

import './index.scss';

const Home = (): JSX.Element => {
  const tile1 = useRef<HTMLDivElement>(document.createElement('div'));
  const tile2 = useRef<HTMLDivElement>(document.createElement('div'));
  const container = useRef<HTMLDivElement>(document.createElement('div'));

  const [windowPosition, setWindowPosition] = useState(0);
  const [tiles, setTiles] = useState<React.MutableRefObject<HTMLDivElement>[]>([
    tile1,
    tile2,
  ]);
  const [sectionShown, setSectionShown] = useState(0);

  useEffect(() => {
    container.current.addEventListener('scroll', (event) => {
      console.log(container.current.scrollTop, windowPosition);
      if (container.current.scrollTop - windowPosition <= 0) {
        tile1.current.scrollIntoView({ behavior: 'smooth' });
      }
      if (container.current.scrollTop - windowPosition > 0) {
        tile2.current.scrollIntoView({ behavior: 'smooth' });
      }
      setWindowPosition(container.current.scrollTop);
    });
  }, []);

  return (
    <section ref={container} className="home">
      <Container className="home__tile" ref={tile1}>
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
      <Container className="home__tile" ref={tile2}>
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
