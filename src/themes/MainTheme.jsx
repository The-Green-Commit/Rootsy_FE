import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { lime } from '@mui/material/colors';
import { red } from '@mui/material/colors';

// import SairaTyp from "src/assets/fonts/SairaCondensed-Regular.ttf"

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
  //     fontFamily: 'Saira Condensed, Regular',
  //   },
  //   components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'Saira';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 400;
  //         src: local('Saira Condensed'), local('Saira-Condensed, Regular'), url(${SairaTyp}) format('ttf');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //   },
  // },
});

export default theme;