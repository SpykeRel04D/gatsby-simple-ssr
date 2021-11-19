const fontsLoader = `;(function () {
  if ( sessionStorage.fontsLoaded ) {
    document.documentElement.className += " fonts-loaded";
    return;
  }
  if ('fonts' in document) {
    document.fonts.load('1em "DIN Office Pro"', '1em CaligraKids').then(function () {
      document.documentElement.className += ' fonts-loaded';
      sessionStorage.fontsLoaded = true;
    });
  }
  else {
    document.documentElement.className += ' fonts-loaded';
    return;
  }
})();`;

export default fontsLoader;
