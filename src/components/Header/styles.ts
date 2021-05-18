import styled from 'styled-components';

import { getRatio, space } from '../../ui/helpers';

const Container = styled.header`
  align-items: center;
  justify-content: center;
  display: flex;
  border-bottom: 8px solid violet;
  color: white;
  font-size: 34px;
  font-weight: 500;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  min-height: ${space(10)};
`;

export { Container };
