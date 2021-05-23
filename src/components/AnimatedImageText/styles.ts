import styled from 'styled-components';

import { media, space, rems } from '../../ui/helpers';
import { BREAKPOINTS } from '../../ui/settings';

const Container = styled.div`
  background: aliceblue;
  color: black;
  padding: ${space(6)} 0 ${space(5)} 0;

  ${media.min('medium')`
    padding: ${space(8)} 0;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${media.min('medium')`
    flex-direction: row;
    justify-content: space-between;
    max-width: ${rems(BREAKPOINTS.mainwrapper)};

    &.reverse {
      flex-direction: row-reverse;
    }
  `}
`;

const ImageZone = styled.div`
  width: 100%;

  .image {
    border-radius: 10px;
    margin-top: ${space(6)};
    width: 100%;
  }

  ${media.min('medium')`
    width: calc(60% - ${space(4)});

    .image {
        margin: 0;
    }
  `}
`;

const TextZone = styled.div`
  width: 100%;

  .text {
    margin-top: ${space(3)};
    padding: 0px;
  }

  .btn {
    margin-top: ${space(4)};
  }

  ${media.min('medium')`
    width: calc(40% - ${space(4)});

    .text {
      margin-top: ${space(2)};
    }

    .btn {
      margin-top: ${space(3)};
    }
  `}
`;

export { Container, Content, ImageZone, TextZone };
