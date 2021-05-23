import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { Container, Frame, Block } from './styles';

const PinnedImageText = props => {
  const moduleRef = useRef(null);

  useEffect(() => {
    const module = moduleRef.current;

    gsap.set(module.querySelector('#frame'), {
      ease: 'none',
      scrollTrigger: {
        trigger: module,
        start: 'top top+=80',
        end: `${props.elements.length + 1}00%`,
        pin: true
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: module,
        scrub: true,
        start: 'top top+=80',
        end: `${props.elements.length + 1}00%`
      }
    });

    props.elements &&
      props.elements.forEach((el, i) => {
        tl.to(module.querySelector(`#${props.key}_block_${i}`), {
          opacity: 1,
          ease: 'none'
        }).to(module.querySelector(`#${props.key}_block_${i}`), {
          opacity: 0,
          ease: 'none'
        });
      });
  }, []);

  return (
    <Container ref={moduleRef}>
      <h2>{props.title}</h2>
      <Frame id="frame">
        {props.elements &&
          props.elements.map((el, i) => (
            <Block id={`${props.key}_block_${i}`}>
              <div className="image">
                <img src={el?.image} />
              </div>
              <div className="content">
                <p>{el?.content}</p>
              </div>
            </Block>
          ))}
      </Frame>
    </Container>
  );
};

export default PinnedImageText;
