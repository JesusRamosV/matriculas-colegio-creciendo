
import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { makeStyles } from '@mui/styles';


const theme = createTheme({
    palette: {
        primary: {
          main: green[500],
        },
        secondary: {
            main: '#f48fb1',

        },
        background: {
          main: '#26c6da',
        }
      },
})

export const useStyles = makeStyles({
  pointer: {
      cursor: 'pointer',
      '&:hover': {
          cursor: 'pointer'
      },
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    underline: "always"
  },
  
})

export default theme;