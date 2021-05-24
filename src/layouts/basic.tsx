import React from 'react';
import GlobalStyle from '../ui/Globals';

import Header from '../components/Header';

const Basic = props => {
  return (
    <>
      <GlobalStyle />
      <Header>{props.insideHeader && props.insideHeader}</Header>
      {props.children}
    </>
  );
};

export default Basic;
