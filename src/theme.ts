// src/theme.ts
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    darkBlue: Palette["primary"];
    lightBlue: Palette["primary"];
  }
  interface PaletteOptions {
    darkBlue?: PaletteOptions["primary"];
    lightBlue?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: { main: "#032c7d" },
    secondary: { main: "#0942ca" },
    info: { main: "#1d97f1" },
    darkBlue: { main: "#030d30" },
    lightBlue: { main: "#dfe6ff" }
  },
  typography: {
    fontFamily: "Poppins, sans-serif"
  }
});

export default theme;
