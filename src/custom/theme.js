import { createTheme, } from "@mui/material";
import { colors } from "@mui/material";

export const theme = createTheme({
  // palette: {
  //   type: 'light',
  //   primary: {
  //     main: '#1f73f0',
  //   },
  //   secondary: {
  //     main: '#f50057',
  //   },
  // },
  // palette: {
  //   type: 'dark',
  //   primary: {
  //     main: '#5893df',
  //   },
  //   secondary: {
  //     main: '#2ec5d3',
  //   },
  //   background: {
  //     default: '#192231',
  //     paper: '#24344d',
  //   },
  // },
  palette: {
    mode: 'dark',
    // type: 'dark',
    primary: {
      main: '#5893df',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      default: '#192231',
      paper: '#24344d',
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  typography: {
    fontFamily: '"Rubik", "Roboto", "Helvetica", "Arial", sans-serif',
    // body1: {
    //   color: 'rgb(0,0,0,0.6)',
    //   fontSize: '13px',
    //   // lineHeight: 1.5
    // },
    description: {
      color: 'rgb(0,0,0,0.6)',
      fontSize: '13px',
      //   // lineHeight: 1.5
    },
    projectHeading: {
      color: 'black',
      fontSize: 'larger',
      fontWeight: 'bold'
    },
  },
})
// import { createTheme } from '@mui/material';

// export const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#5893df',
//     },
//     secondary: {
//       main: '#2ec5d3',
//     },
//     background: {
//       default: '#192231',
//       paper: '#24344d',
//     },
//   },
//   props: {
//     MuiTooltip: {
//       arrow: true,
//     },
//   },
//   typography: {
//     fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
//   },
// });

console.log(theme)