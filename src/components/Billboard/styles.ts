import styled from 'styled-components';
import { space, rems } from '../../ui/helpers';
import { HEADER_SIZE } from '../../ui/settings';

const Container = styled.div`
  align-items: center;
  background: #40e0d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - ${rems(HEADER_SIZE)});
  width: 100%;

  .title {
    color: #fff;
    font-size: ${rems(80)};
    font-weight: 500;
    margin-bottom: ${space(2)};
  }

  .subtitle {
    color: #fff;
    font-size: ${rems(18)};
    font-weight: 300;
  }
`;

export { Container };
