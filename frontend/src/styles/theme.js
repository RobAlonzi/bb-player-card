import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";

const theme = createTheme({
  palette: {
    black: {
      main: COLORS.BLACK,
    },
    primary: {
      main: COLORS.TEXT_PRIMARY,
    },
    gray: {
      main: COLORS.GRAY,
    },
    gold: {
      main: COLORS.GOLD,
    },
  },
});

export default theme;
