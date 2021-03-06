import React, { useRef } from 'react';
import GlobalStyle from '../ui/Globals';

import Header from '../components/Header';

const Basic = props => {
  const rendersCount = useRef(0);
  return (
    <>
      <GlobalStyle />
      <Header>{props.insideHeader && props.insideHeader}</Header>
      {props.children}
    </>
  );
};

export default Basic;
