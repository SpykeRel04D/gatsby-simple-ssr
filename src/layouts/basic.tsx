import React, { useRef } from 'react';
import useFontObserver from '../hooks/useFontObserver';
import GlobalStyle from '../ui/Globals';

import Header from '../components/Header';

const Basic = props => {
  const rendersCount = useRef(0);
  useFontObserver(['CaligraKids', 'DIN Office Pro']);
  return (
    <>
      <GlobalStyle />
      <Header>{props.insideHeader && props.insideHeader}</Header>
      {props.children}
    </>
  );
};

export default Basic;
