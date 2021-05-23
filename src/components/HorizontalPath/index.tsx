import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { Container, Visor, Reel, Card, Path, Progress } from './styles';

const HorizontalPath = props => {
  const moduleRef = useRef(null);

  useEffect(() => {
    const module = moduleRef.current;
    const xMovement = 100 - 100 / props.elements.length;

    gsap.set(module, {
      ease: 'none',
      scrollTrigger: {
        trigger: module,
        start: 'top top+=80',
        end: `${props.elements.length + 1}00%`,
        pin: true
      }
    });

    gsap.to(module.querySelector(`#path`), {
      transformOrigin: 'left center',
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: 'none',
      scrollTrigger: {
        trigger: module,
        scrub: true,
        start: 'top top+=80',
        end: `${props.elements.length + 1}00%`
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

    tl.to(module.querySelector(`#reel`), {
      x: `-${xMovement}%`,
      ease: 'none'
    });
  }, []);

  return (
    <Container ref={moduleRef}>
      <h2>{props.title}</h2>
      <Visor>
        <Reel id="reel" n={props.elements.length}>
          {props.elements &&
            props.elements.map((el, i) => (
              <Card n={props.elements.length}>
                <img className="image" src={el.image} />
                <h3 className="title">{el.title}</h3>
                <p className="text">{el.content}</p>
              </Card>
            ))}
        </Reel>
        <Path id="path" perc={100 - 100 / props.elements.length}>
          {props.elements &&
            props.elements.map((el, i) => (
              <Progress className="colored" color={el.color} perc={100 / props.elements.length} />
            ))}
        </Path>
      </Visor>
    </Container>
  );
};

export default HorizontalPath;
