import styled from 'styled-components';
import { space, rems, media } from '../../ui/helpers';
import { HEADER_SIZE } from '../../ui/settings';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: lightcoral;
  height: calc(100vh - ${rems(HEADER_SIZE)});
  width: 100%;
`;

const Visor = styled.div`
  height: 100%;
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Reel = styled.div<{ n: number }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${({ n }) => `${100 * n}%`};

  ${media.min('mainwrapper')`
    width: ${({ n }) => `${rems(1200 * n)}`};
  `};
`;

const Card = styled.div<{ n: number }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 60%;
  margin: 0 ${space(2)};
  max-width: 1200px;
  width: ${({ n }) => `${100 / n}%`};

  .image {
    border-radius: 10px;
    margin-bottom: ${space(2)};
    max-width: 800px;
    width: 80%;
  }

  .title {
    color: black;
    font-size: ${rems(30)};
    margin-bottom: ${space(2)};
    max-width: 800px;
    width: 80%;
  }

  .text {
    margin-bottom: ${space(6)};
    max-width: 800px;
    width: 80%;
  }
`;

const Path = styled.div<{ perc: number }>`
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  bottom: ${space(4)};
  left: 5%;
  background: white;
  height: ${space(2)};
  position: absolute;
  width: 90%;
  z-index: 5;
  clip-path: ${({ perc }) => `inset(0% ${perc}% 0% 0%)`};

  & > :first-child {
    border-radius: 10px 0 0 10px;
  }

  & > :last-child {
    border-radius: 0 10px 10px 0;
  }
`;

const Progress = styled.div<{ color: string; perc: number }>`
  background: ${({ color }) => `${color}`};
  height: 100%;
  width: ${({ perc }) => `${perc}%`};
`;

export { Container, Visor, Reel, Card, Path, Progress };
