import { css } from 'styled-components';
import { media } from '../helpers';
import { typography } from '../design-tokens';

let fonts = {};

Object.keys(typography.mobile).map(label => {
  fonts[label] = css`
    ${typography.fallback.mobile[label].styles};

    .fonts-loaded & {
      ${typography.mobile[label].styles};
    }

    ${media.min('medium')`
      ${typography.fallback.desktop[label].styles};

      .fonts-loaded & {
        ${typography.desktop[label].styles};
      }
    `}
  `;
});

export default fonts;
