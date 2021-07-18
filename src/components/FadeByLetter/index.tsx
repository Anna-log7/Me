import React, { useEffect, useState } from 'react';
import Fade from 'react-bootstrap/Fade';

type FadeByLetterProps = {
  text: string;
};

const FadeByLetter = ({
  text,
}: FadeByLetterProps): JSX.Element => {
  const [letters, setLetters] = useState<string[]>([]);
  const [lengthShown, setLengthShown] = useState(0);

  useEffect(() => {
    if (text) {
      setLetters(text.split(''));
    }
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lengthShown < letters.length) {
        setLengthShown(lengthShown + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [lengthShown, letters]);

  return (
    <>
      {letters.map((letter, index) => (
        <Fade appear in={index < lengthShown} key={index} timeout={200}>
          <span>{letter}</span>
        </Fade>
      ))}
    </>
  );
};

export default FadeByLetter;
