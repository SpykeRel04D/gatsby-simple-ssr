import React from 'react';

import { Container } from './styles';

const Component03 = props => (
  <Container>
    <h2>{props?.title}</h2>
    <p>{props?.content}</p>
    <img className="image" alt="" src={props.image} />
  </Container>
);

export default Component03;
