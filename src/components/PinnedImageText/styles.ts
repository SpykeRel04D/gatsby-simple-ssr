import styled from 'styled-components';
import { space, rems } from '../../ui/helpers';
import { HEADER_SIZE } from '../../ui/settings';

const Container = styled.div`
  align-items: center;
  background: #f4f0ee;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${rems(HEADER_SIZE)});
  justify-content: center;
  padding: ${space(3)};
  text-align: center;
  width: 100%;
`;

const Frame = styled.div`
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  height: 50%;
  max-width: 1200px;
  overflow: hidden;
  position: relative;
  width: 90%;
`;

const Block = styled.div`
  display: flex;
  flex-direction: row;
  left: 0;
  text-align: left;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;

  .content {
    width: 40%;
  }

  .image {
    width: 60%;
  }
`;

export { Container, Frame, Block };
