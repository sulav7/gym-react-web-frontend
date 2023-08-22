import { createTheme, Theme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#00785a", // Green
      light: "#49a082",
      dark: "#00512f",
    },
    secondary: {
      main: "#ea5b0d", // Orange
      light: "#ff8c42",
      dark: "#b24300",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#e1193e",
          color: "white",
          letterSpacing: "normal",
          "&:hover": {
            backgroundColor: "#005a3e",
          },
          ":disabled": {
            backgroundColor: "#ea5b0d",
          },
        },
        outlined: {
          letterSpacing: "normal",
          fontWeight: "600",
        },
        text: {
          fontWeight: "600",
          letterSpacing: "normal",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "#49a082",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#00785a", // Change the hover background color
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#49a082",
        },
      },
    },
    // MuiSvgIcon: {
    //   styleOverrides: {
    //     root: {
    //       color: "#49a082",
    //       cursor: "pointer",
    //     },
    //   },
    // },
  },
});

export default theme;
