import styled from 'styled-components';
import { space, rems } from '../../ui/helpers';
import { HEADER_SIZE } from '../../ui/settings';

const Bb = styled.div`
  align-items: center;
  background: #40e0d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;

  .title {
    color: #fff;
    font-size: ${rems(40)};
    font-weight: 500;
    margin-bottom: ${space(2)};
  }

  .subtitle {
    color: #fff;
    font-size: ${rems(18)};
    font-weight: 300;
  }
`;

export { Bb };
