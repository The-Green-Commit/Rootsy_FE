import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { lime } from '@mui/material/colors';
import { red } from '@mui/material/colors';
// import ShadowsTyp from "src/assets/fonts/ShadowsIntoLight-Regular.ttf"


const theme = createTheme({
  cssVariables: true,
  palette: {
    lime: {
      main: lime[100],
    },
    orange: {
      main: orange.A200,
    },
    mediumGreen: {
        main: green[300],
    },
    error: {
      main: red[500],
    },
  },
  //   typography: {
// h1: { fontFamily: `'Shadows Into Light'},
// h2: { fontFamily: `'Shadows Into Light'},
// h3: { fontFamily: `'Shadows Into Light'},
// h4: { fontFamily: `'Shadows Into Light'},
  //   },
  //   components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'Shadows';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 400;
  //         src: local('Shadows Into Light'), local('Shadows-Into-Light, Regular'), url(${ShadowsTyp}) format('woff2');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //   },
  // },
});

export default theme;