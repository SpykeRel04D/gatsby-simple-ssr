const BREAKPOINTS: { [key: string]: number } = {
  xsmall: 480,
  small: 640,
  medium: 960,
  large: 1024,
  xlarge: 1280,
  xxlarge: 1400,
  fullwidth: 1920,
  reader: 704,
  readerBreak: 896,
  mainwrapper: 1088
};

const FONT_PRIMARY = '"DIN Office Pro", Arial, sans-serif';
const FONT_SECONDARY = '"CaligraKids", Arial, sans-serif';
const FONT_FALLBACK = 'Arial, sans-serif';
const FONT_BASE_SIZE = 16;
const SPACE = 8;

export { BREAKPOINTS, FONT_BASE_SIZE, SPACE, FONT_PRIMARY, FONT_SECONDARY, FONT_FALLBACK };
