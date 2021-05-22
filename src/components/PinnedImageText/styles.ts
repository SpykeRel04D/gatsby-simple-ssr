import styled from 'styled-components';
import { space } from '../../ui/helpers';

const Container = styled.div`
  background: #f4f0ee;
  display: flex;
  flex-direction: column;
  padding: ${space(3)};
  text-align: center;
  width: 100%;
`;

const Block = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1200px;
  text-align: left;

  .content {
    width: 40%;
  }

  .image {
    width: 60%;
  }
`;

export { Container, Block };
