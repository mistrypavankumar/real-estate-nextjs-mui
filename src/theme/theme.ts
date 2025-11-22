"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  cssVariables: true,
  palette: {
    primary: {
      main: "#0F1214",
      dark: "#0F1214",
      light: "rgba(27, 32, 36, 0.6)",
    },
    secondary: {
      main: "#377ef9",
      dark: "#377ef9",
      light: "#f6f7f8",
    },
    background: {
      default: "#0F1214",
    },
    text: {
      primary: "#f6f7f8",
      secondary: "#0F1214",
    },
  },
});

export default theme;
