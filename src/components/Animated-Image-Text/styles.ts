import styled from 'styled-components';
import { space } from '../../ui/helpers';

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  height: ${space(200)};
  padding: ${space(3)};
  width: 100%;
`;

const ImageText = styled.div`
  display: flex;
  flex-direction: row;

  .imageText {
    &__image {
      padding: ${space()};
      overflow: hidden;
      width: 50%;

      img {
        max-width: 100%;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100%;
      padding: ${space()};
      z-index: 2;
      width: 50%;

      h2 {
        margin-top: 1.5rem;
        font-size: 3.125rem !important;
      }
    }
  }

  .zoomIn {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;

    &:hover {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
`;

export { Container, ImageText };
