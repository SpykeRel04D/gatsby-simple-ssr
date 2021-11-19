import { css } from 'styled-components';

import CaligraKids from './caligrakids/dsans/caligrakids-dsans.woff';
import CaligraKids2 from './caligrakids/dsans/caligrakids-dsans.woff2';
import DinOfficePro from './din-office-pro/woff/DINOffcPro.woff';
import DinOfficePro2 from './din-office-pro/woff2/DINOffcPro.woff2';
import DinOfficeProLight from './din-office-pro/woff/DINOffcPro-Light.woff';
import DinOfficeProLight2 from './din-office-pro/woff2/DINOffcPro-Light.woff2';
import DinOfficeProMedium from './din-office-pro/woff/DINOffcPro-Medi.woff';
import DinOfficeProMedium2 from './din-office-pro/woff2/DINOffcPro-Medi.woff2';

const FontFaces = css`
  @font-face {
    font-family: 'DIN Office Pro';
    src:
      local('DIN Office Pro'),
      local('DINOffcPro'),
      url(${DinOfficePro2}) format('woff2'),
      url(${DinOfficePro}) format('woff');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'DIN Office Pro';
    src:
      local('DIN Office Pro Light'),
      local('DINOffcPro-Light'),
      local('DIN Office Pro'),
      local('DINOffcPro'),
      url(${DinOfficeProLight2}) format('woff2'),
      url(${DinOfficeProLight}) format('woff');
    font-weight: 300;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'DIN Office Pro';
    src:
      local('DIN Office Pro Medium'),
      local('DINOffcPro-Medi'),
      local('DIN Office Pro'),
      local('DINOffcPro'),
      url(${DinOfficeProMedium2}) format('woff2'),
      url(${DinOfficeProMedium}) format('woff');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'CaligraKids';
    src:
      local('CaligraKids'),
      url(${CaligraKids2}) format('woff2'),
      url(${CaligraKids}) format('woff');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }
`;

export default FontFaces;
