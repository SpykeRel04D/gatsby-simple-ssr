import { css } from 'styled-components';

import dt_colors from './colors.json';
import dt_typography from './typography.json';
import { rems } from '../helpers';
import { FONT_PRIMARY, FONT_SECONDARY, FONT_FALLBACK } from '../settings';

const colors = {};

Object.keys(dt_colors.colors).map(key => {
  const _tokens = key.split('_');
  colors[_tokens[0]] = {
    ...colors[_tokens[0]],
    [_tokens[1]]: dt_colors.colors[key].value
  };
});

const themes = {
  basic: {
    babies: {
      background: colors.babies[100],
      clickable: colors.babies[800],
      form: colors.babies[300],
      hover: colors.babies[800],
      icon: colors.babies[500],
      saturated: colors.babies[300],
      secondary: colors.babies[900],
      text: colors.babies[900],
      focus: colors.babies[900]
    },
    babies_dark: {
      background: colors.babies[300],
      clickable: colors.babies[800],
      form: colors.babies[300],
      hover: colors.babies[800],
      icon: colors.babies[500],
      saturated: colors.babies[300],
      secondary: colors.babies[900],
      text: colors.babies[900],
      focus: colors.babies[900]
    },
    kids: {
      background: colors.kids[100],
      clickable: colors.kids[800],
      form: colors.kids[300],
      hover: colors.kids[800],
      icon: colors.kids[500],
      saturated: colors.kids[300],
      secondary: colors.kids[900],
      text: colors.kids[900],
      focus: colors.kids[900]
    },
    kids_dark: {
      background: colors.kids[300],
      clickable: colors.kids[800],
      form: colors.kids[300],
      hover: colors.kids[800],
      icon: colors.kids[500],
      saturated: colors.kids[300],
      secondary: colors.kids[900],
      text: colors.kids[900],
      focus: colors.kids[900]
    },
    tweens: {
      background: colors.tweens[100],
      clickable: colors.tweens[800],
      form: colors.tweens[300],
      hover: colors.tweens[800],
      icon: colors.tweens[500],
      saturated: colors.tweens[300],
      secondary: colors.tweens[900],
      text: colors.tweens[900],
      focus: colors.tweens[900]
    },
    tweens_dark: {
      background: colors.tweens[300],
      clickable: colors.tweens[800],
      form: colors.tweens[300],
      hover: colors.tweens[800],
      icon: colors.tweens[500],
      saturated: colors.tweens[300],
      secondary: colors.tweens[900],
      text: colors.tweens[900],
      focus: colors.tweens[900]
    },
    teens: {
      background: colors.teens[100],
      clickable: colors.teens[800],
      form: colors.teens[300],
      hover: colors.teens[800],
      icon: colors.teens[500],
      saturated: colors.teens[300],
      secondary: colors.teens[900],
      text: colors.teens[900],
      focus: colors.teens[900]
    },
    teens_dark: {
      background: colors.teens[300],
      clickable: colors.teens[800],
      form: colors.teens[300],
      hover: colors.teens[800],
      icon: colors.teens[500],
      saturated: colors.teens[300],
      secondary: colors.teens[900],
      text: colors.teens[900],
      focus: colors.teens[900]
    },
    franchises_dark: {
      background: colors.neutral?.[800],
      clickable: colors.neutral[100],
      form: colors.neutral[800],
      hover: colors.franquicias?.[100],
      icon: colors.neutral[100],
      saturated: colors.neutral[800],
      secondary: colors.neutral[100],
      text: colors.neutral[100],
      focus: colors.neutral[900]
    },
    franchises_light: {
      background: colors.franquicias?.[100],
      clickable: colors.franquicias?.[500],
      hover: colors.franquicias?.[500],
      icon: colors.franquicias?.[300],
      saturated: colors.franquicias?.[100],
      secondary: colors.franquicias?.[800],
      text: colors.franquicias?.[800]
    },
    neutral: {
      background: colors.neutral[200],
      clickable: colors.primary[600],
      hover: colors.primary[500],
      icon: colors.neutral[800],
      saturated: colors.neutral[200],
      secondary: colors.neutral[900],
      secondaryHover: colors.neutral[800],
      text: colors.neutral[900]
    },
    white: {
      background: colors.neutral[100],
      clickable: colors.primary[600],
      hover: colors.primary[500],
      icon: colors.neutral[800],
      saturated: colors.neutral[100],
      secondary: colors.neutral[900],
      secondaryHover: colors.neutral[800],
      text: colors.neutral[900]
    },
    dark: {
      background: colors.neutral[900],
      hover: colors.neutral[200],
      icon: colors.neutral[100],
      secondary: colors.neutral[100],
      secondaryHover: colors.neutral[200],
      text: colors.neutral[100]
    }
  },
  billboard: {
    babies: {
      color: colors.babies[900],
      colorHover: colors.babies[800],
      background: colors.babies[100]
    },
    babies_dark: {
      color: colors.babies[900],
      colorHover: colors.babies[800],
      background: colors.babies[300]
    },
    kids: {
      color: colors.kids[900],
      colorHover: colors.kids[800],
      background: colors.kids[100]
    },
    kids_dark: {
      color: colors.kids[900],
      colorHover: colors.kids[800],
      background: colors.kids[300]
    },
    tweens: {
      color: colors.tweens[900],
      colorHover: colors.tweens[800],
      background: colors.tweens[100]
    },
    tweens_dark: {
      color: colors.tweens[900],
      colorHover: colors.tweens[800],
      background: colors.tweens[300]
    },
    teens: {
      color: colors.teens[900],
      colorHover: colors.teens[800],
      background: colors.teens[100]
    },
    teens_dark: {
      color: colors.teens[900],
      colorHover: colors.teens[800],
      background: colors.teens[300]
    },
    white: {
      color: colors.neutral[900],
      colorHover: colors.neutral[800],
      background: colors.neutral[100]
    },
    neutral: {
      color: colors.neutral[900],
      colorHover: colors.neutral[800],
      background: colors.neutral[200]
    },
    franchises_dark: {
      color: colors.neutral?.[100],
      colorHover: colors.franquicias?.[100],
      background: colors.neutral?.[800],
      bar: colors.franquicias?.[100]
    },
    franchises_light: {
      color: colors.franquicias?.[800],
      colorHover: colors.franquicias?.[500],
      background: colors.franquicias?.[100],
      bar: colors.franquicias?.[300]
    }
  },
  testimonials: {
    babies: {
      background: colors.babies[100],
      quotes: colors.babies[800],
      color: colors.babies[900],
      icon: colors.babies[500]
    },
    babies_dark: {
      background: colors.babies[300],
      quotes: colors.babies[800],
      color: colors.babies[900],
      icon: colors.babies[500]
    },
    kids: {
      background: colors.kids[100],
      quotes: colors.kids[800],
      color: colors.kids[900],
      icon: colors.kids[500]
    },
    kids_dark: {
      background: colors.kids[300],
      quotes: colors.kids[800],
      color: colors.kids[900],
      icon: colors.kids[500]
    },
    tweens: {
      background: colors.tweens[100],
      quotes: colors.tweens[800],
      color: colors.tweens[900],
      icon: colors.tweens[500]
    },
    tweens_dark: {
      background: colors.tweens[300],
      quotes: colors.tweens[800],
      color: colors.tweens[900],
      icon: colors.tweens[500]
    },
    teens: {
      background: colors.teens[100],
      quotes: colors.teens[800],
      color: colors.teens[900],
      icon: colors.teens[500]
    },
    teens_dark: {
      background: colors.teens[300],
      quotes: colors.teens[800],
      color: colors.teens[900],
      icon: colors.teens[500]
    },
    neutral: {
      background: colors.neutral[200],
      quotes: colors.neutral[800],
      color: colors.neutral[800],
      icon: colors.neutral[800]
    },
    franchises_dark: {
      background: colors.neutral[800],
      quotes: colors.neutral[100],
      color: colors.neutral[100],
      icon: colors.franquicias?.[900]
    },
    franchises_light: {
      background: colors.franquicias?.[100],
      quotes: colors.franquicias?.[500],
      color: colors.franquicias?.[800],
      icon: colors.franquicias?.[300]
    },
    white: {
      background: colors.neutral[100],
      quotes: colors.neutral[800],
      color: colors.neutral[800],
      icon: colors.neutral[800]
    }
  }
};

const typography = {
  mobile: {},
  desktop: {},
  fallback: {
    mobile: {},
    desktop: {}
  }
};

const _getTypographyLabel = key => {
  const res = key.reduce((container, value, i) => {
    switch (i) {
      case 0:
        return value;
      case 1:
        return container + value.toUpperCase();
      default:
        return container + value.charAt(0).toUpperCase() + value.slice(1);
    }
  }, '');
  return res;
};

const _getTypographyName = str => {
  const value = str.toLowerCase();
  if (value.indexOf('arial') >= 0) {
    return FONT_FALLBACK;
  } else if (value.indexOf('caligra') >= 0) {
    return FONT_SECONDARY;
  } else {
    return FONT_PRIMARY;
  }
};

Object.keys(dt_typography.typography).map(key => {
  const _tokens = key.split('_');
  const isFallback = _tokens.includes('arial');
  const device = _tokens.shift();
  const fontFamily = _getTypographyName(dt_typography.typography[key].fontFamily.value);
  const fontSize = rems(dt_typography.typography[key].fontSize.value.replace('px', ''));
  const letterSpacing = rems(dt_typography.typography[key].letterSpacing.value.replace('px', ''));
  const _styles = css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${dt_typography.typography[key].fontWeight.value};
    letter-spacing: ${letterSpacing};
    line-height: ${dt_typography.typography[key].lineHeightRelative.value};
  `;

  if (isFallback) {
    _tokens.pop();
    const label = _getTypographyLabel(_tokens);
    typography.fallback[device][label] = {
      key,
      fontFamily,
      fontSize,
      styles: _styles
    };
  } else {
    const label = _getTypographyLabel(_tokens);
    typography[device][label] = {
      key,
      fontFamily,
      fontSize,
      styles: _styles
    };
  }
});

export { colors, themes, typography };
