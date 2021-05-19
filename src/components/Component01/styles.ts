import styled from 'styled-components';
import { space } from '../../ui/helpers';

const Container = styled.div`
  background: lawngreen;
  display: flex;
  flex-direction: column;
  height: ${space(100)};
  padding: ${space(3)};
  width: 100%;

  .image {
    border: 6px solid black;
    border-radius: 10px;
    margin: auto;
    max-width: 600px;
    width: 90%;
  }
`;

export { Container };
