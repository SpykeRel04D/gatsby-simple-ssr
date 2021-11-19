import styled from 'styled-components';
import { space, rems } from '../../ui/helpers';
import fonts from '../../ui/fonts';

const Module = styled.div`
  background: white;
  padding: ${space(10)} ${space(2)};
  width: 100%;
`;

const Banner = styled.div`
  background-color: #93ddcf;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1400px;
  min-height: 300px;
`;

const AnimatedZone = styled.div`
  position: relative;
  width: 55%;

  .animationRule {
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }

  .bgImage {
    bottom: 5%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 75%;

    &__anim {
      bottom: 15%;
      width: 70%;
    }
  }

  .fgImage {
    height: 130%;
    left: 50%;
    position: absolute;
    top: -15%;
    transform: translateX(-50%);

    &__anim {
      height: 140%;
      top: -20%;
    }
  }

  .mainImage {
    height: 130%;
    left: 50%;
    position: absolute;
    top: -15%;
    transform: translateX(-50%);

    &__anim {
      height: 135%;
      top: -12.5%;
    }
  }
`;

const ContentZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;

  .title {
    margin-bottom: ${space()};
  }

  .description {
    ${fonts.highlightsMD};
    font-size: ${rems(28)} !important;
    margin-bottom: ${space()};
  }

  .link {
    display: inline-block;
    text-align: left;
  }
`;

export { Module, Banner, AnimatedZone, ContentZone };
