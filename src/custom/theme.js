import { createTheme, } from "@mui/material";
import { colors } from "@mui/material";

export const theme = createTheme({
  palette: {
  },
  typography: {
    fontFamily: "Rubik",
    body1: {
      color: 'rgb(0,0,0,0.6)',
      fontSize: '13px',
      // lineHeight: 1.5
    },
    projectHeading: {
      color: 'black',
      fontSize: 'larger',
      fontWeight: 'bold'
    }
  }
})
