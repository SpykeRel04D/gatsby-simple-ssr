import React from 'react';

import { Container } from './styles';

const Header = props => (
  <>
    {props.children ? (
      props.children
    ) : (
      <Container>I'M JUST A POOR HEADER</Container>
    )}
  </>
);

export default Header;
