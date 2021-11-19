import { useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';

const useFontObserver = (fonts: string[]) => {
  let fontsArray = fonts.map(font => new FontFaceObserver(font));
  useEffect(() => {
    Promise.all(fontsArray.map(font => font.load())).then(function () {
      document.documentElement.className += ' fonts-loaded';
    });
  }, []);
};

export default useFontObserver;
