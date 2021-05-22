import React from 'react';

import { Container, Block } from './styles';

const PinnedImageText = props => (
  <Container>
    <h2>{props.title}</h2>
    {props.elements &&
      props.elements.map(el => {
        return (
          <Block>
            <div className="image">
              <img src={el.image} />
            </div>
            <div className="content">
              <p>{el.content}</p>
            </div>
          </Block>
        );
      })}
  </Container>
);

export default PinnedImageText;
