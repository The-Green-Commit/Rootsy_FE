import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { lime } from '@mui/material/colors';
import { red } from '@mui/material/colors';


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
});

export default theme;