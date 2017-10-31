import { injectGlobal } from 'styled-components';

import backgroundPhoto from 'background.jpg';
console.log(backgroundPhoto)

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  body {
    background: url('${backgroundPhoto}');
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    height: 100%;
    overflow-y: auto;
    min-width: 100%;
  }
  textarea, input, select, button {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;


export const theme = {
  spiritual: '#83CFEA',
  physical: '#FF9A8A',
  emotional: '#FFDD8A',
  levels: {
    10: '#37B5EF',
    9: '#3A77A3',
    8: '#60A2B3',
    7: '#95CACB',
    6: '#D8EEEC',
    5: '#FDE7D7',
    4: '#F0B790',
    3: '#D98955',
    2: '#BD5C29',
    1: '#9E2B0E',
    0: '#fff',
    '-10': '#D84B4B',
    '-9': '#DB5B5B',
    '-8': '#DF6B6B',
    '-7': '#E27C7C',
    '-6': '#D8EEEC',
    '-5': '#FDE7D7',
    '-4': '#F0B790',
    '-3': '#D98955',
    '-2': '#BD5C29',
    '-1': '#9E2B0E',
    '-0': '#9E2B0E',
  }
};
