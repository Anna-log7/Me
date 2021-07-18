import React from 'react';
import Card from 'react-bootstrap/Card';

import FadeByLetter from '../FadeByLetter';

import './index.scss';

type OpaqueCardProps = {
  body: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  centeredText?: boolean;
};

const OpaqueCard = ({
  body,
  variant = 'h2',
  centeredText = false,
}: OpaqueCardProps): JSX.Element => (
  <Card className="opaque-card">
    <Card.Body>
      <Card.Text
        as="div"
        className={`${centeredText ? 'opaque-card--center' : ''}`}
      >
        <FadeByLetter text={body} />
      </Card.Text>
    </Card.Body>
  </Card>
);

export default OpaqueCard;
