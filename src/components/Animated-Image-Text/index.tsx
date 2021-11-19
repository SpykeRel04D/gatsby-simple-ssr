import React from 'react';

import Wrapper from '../../ui/Wrappers';
import { Container, ImageText } from './styles';

const AnimatedImageText = props => (
  <Container>
    <Wrapper size="xxlarge" as={ImageText}>
      <div className="imageText__image">
        <img className={`image ${props?.animation}`} alt="" src={props.image} />
      </div>
      <div className="imageText__content">
        <h2>{props?.title}</h2>
        <p>{props?.content}</p>
      </div>
    </Wrapper>
  </Container>
);

export default AnimatedImageText;
