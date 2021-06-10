import React, { useRef, useEffect } from 'react';
import { Container, Content, ImageZone, TextZone } from './styles';
import Wrapper from '../../ui/Wrappers';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AnimatedImageText = props => {
  const moduleRef = useRef(null);

  useEffect(() => {
    const module = moduleRef.current;

    gsap.fromTo(
      module.querySelector(`#image_${props.key}`),
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: module,
          start: 'top center'
        }
      }
    );

    gsap.fromTo(
      module.querySelector(`#text_${props.key}`),
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: module,
          start: 'top center'
        }
      }
    );
  }, []);

  return (
    <Container ref={moduleRef}>
      <Wrapper
        size="reader"
        as={Content}
        className={`${props.direction === 'text_right' ? 'reverse' : ''}`}>
        <TextZone id={`text_${props.key}`}>
          {props.title && <h2 className="title">{props.title}</h2>}
          <p className="text">{props.content}</p>
        </TextZone>
        <ImageZone id={`image_${props.key}`}>
          <img className="image" src={props.image} />
        </ImageZone>
      </Wrapper>
    </Container>
  );
};

export default AnimatedImageText;
