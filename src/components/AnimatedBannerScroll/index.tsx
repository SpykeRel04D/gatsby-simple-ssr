import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';

import { Module, Banner, AnimatedZone, ContentZone } from './styles';

import { externalLink } from '../../ui/helpers';
import ButtonTertiary from '../ButtonTertiary';

const AnimatedBannerScroll = props => {
  const ref = useRef(null);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    window.onscroll = () => {
      if (
        ref.current &&
        window.innerHeight &&
        ref.current.getBoundingClientRect().top < window.innerHeight &&
        ref.current.getBoundingClientRect().top > 0
      ) {
        scrollYProgress.set(ref.current.getBoundingClientRect().top / window.innerHeight);
      }
    };
  }, []);

  const mainTopPos = useTransform(scrollYProgress, [0, 0.5, 1], ['-15%', '-12.5%', '-15%']);
  const mainHeight = useTransform(scrollYProgress, [0, 0.5, 1], ['130%', '135%', '130%']);

  const bgBottomPos = useTransform(scrollYProgress, [0, 0.5, 1], ['5%', '15%', '5%']);
  const bgWidth = useTransform(scrollYProgress, [0, 0.5, 1], ['75%', '70%', '75%']);

  const fgTopPos = useTransform(scrollYProgress, [0, 0.5, 1], ['-15%', '-12.5%', '-15%']);
  const fgHeight = useTransform(scrollYProgress, [0, 0.5, 1], ['130%', '140%', '130%']);

  return (
    <Module>
      <Banner ref={ref}>
        <AnimatedZone>
          <motion.img
            style={{ bottom: bgBottomPos, width: bgWidth }}
            className={`animationRule image bgImage`}
            alt=""
            src={props.background}
          />
          <motion.img
            style={{ top: mainTopPos, height: mainHeight }}
            className={`animationRule image mainImage`}
            alt=""
            src={props.image}
          />
          <motion.img
            style={{ top: fgTopPos, height: fgHeight }}
            className={`animationRule image fgImage`}
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

export default AnimatedBannerScroll;
