import React, { useState, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

import { Module, Banner, AnimatedZone, ContentZone } from './styles';

import { externalLink } from '../../ui/helpers';
import ButtonTertiary from '../ButtonTertiary';

const AnimatedBanner = props => {
  const [isHover, setIsHover] = useState(false);
  const ref: any = useRef<HTMLDivElement>();

  let onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-50% 0px -50% 0px');
  if (props.observer && onScreen) setIsHover(true);
  else if (props.observer && !onScreen) setIsHover(false);

  return (
    <Module>
      <Banner
        ref={ref}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        <AnimatedZone>
          <img
            className={`animationRule image bgImage ${isHover ? 'bgImage__anim' : ''}`}
            alt=""
            src={props.background}
          />
          <img
            className={`animationRule image mainImage ${isHover ? 'mainImage__anim' : ''}`}
            alt=""
            src={props.image}
          />
          <img
            className={`animationRule image fgImage ${isHover ? 'fgImage__anim' : ''}`}
            alt=""
            src={props.foreground}
          />
        </AnimatedZone>
        <ContentZone>
          <h2 className="title">{props?.title}</h2>
          <p className="description">{props?.content}</p>
          {props.cta && props.link && (
            <ButtonTertiary
              className="link"
              to={props.link}
              target={`${externalLink(props.link) && '_blank'}`}
              label={props.cta}
            />
          )}
        </ContentZone>
      </Banner>
    </Module>
  );
};

export default AnimatedBanner;
