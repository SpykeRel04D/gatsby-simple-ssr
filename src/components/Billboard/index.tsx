import React from 'react';

import { Container } from './styles';

const Billboard = props => {
  return (
    <Container>
      <h1 className="title">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>
    </Container>
  );
};

export default Billboard;
