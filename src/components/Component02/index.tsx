import React from 'react';

import { Container } from './styles';

const Component02 = props => (
  <Container>
    <h2>{props?.title}</h2>
    <p>{props?.content}</p>
  </Container>
);

export default Component02;
