import { createGlobalStyle } from 'styled-components';
import FontFaces from './fonts/FontFaces';
import fonts from './fonts';
import { media } from './helpers';

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }
  ul,
  ol {
    list-style: none;
    padding: 0;
  }
  a {
    font-weight: 500;
    text-decoration: underline;
    text-decoration-skip-ink: auto;
    * {
      pointer-events: none;
    }
  }

  h1, .title1 {
    ${fonts.titleLG};
  }

  h2, .title2 {
    ${fonts.titleMD};
  }

  h3, .title3 {
    ${fonts.titleSM};
  }

  .p-big {
    ${fonts.bodyLG};
  }

  img {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  strong, b {
    font-weight: 500;
  }
  
  header {
    position: sticky;
    top: 0px;
    width: 100%;
    z-index: 1000;
    a{
        text-decoration: none;
    }
    ${media.min('medium')`
        &.expanded {
            transform: translateY(0);
            transition: 0.5s;
        }
        &.retrained {
            transform: translateY(-3rem);
            transition: 0.5s;
        }
    `};
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
