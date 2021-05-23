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
      module.querySelector(`#image`),
      {
        x: props.direction === 'text_right' ? '-100%' : '100%',
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: module,
          start: 'top center',
          end: `bottom center`
        }
      }
    );

    gsap.fromTo(
      module.querySelector(`#text`),
      {
        x: props.direction === 'text_left' ? '-100%' : '100%',
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: module,
          start: 'top center',
          end: `bottom center`
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
        <TextZone id="text">
          {props.title && <h2 className="title">{props.title}</h2>}
          <p className="text">{props.content}</p>
        </TextZone>
        <ImageZone id="image">
          <img className="image" src={props.image} />
        </ImageZone>
      </Wrapper>
    </Container>
  );
};

export default AnimatedImageText;
