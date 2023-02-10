import { green, blue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const kitsTheme = createTheme({
  palette: {
    primary: {
      main: green["A400"],
    },
    secondary: {
      main: blue["A700"],
      light: blue[400],
    },
  },
});

export default kitsTheme;
