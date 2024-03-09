import { createTheme } from "@mui/material/styles";
import { green, purple , orange } from "@mui/material/colors";

const color = {
  purple: "#5b4bc2",
};
export const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    h6: {
      color: "#666464",
    },
  },
});
