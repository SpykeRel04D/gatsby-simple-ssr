import React from 'react';

import { Bb } from './styles';

const Billboard = props => {
  return (
    <Bb>
      <h1 className="title">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>
    </Bb>
  );
};

export default Billboard;
