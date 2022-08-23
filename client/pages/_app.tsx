import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import type { AppProps } from "next/app";
import ResponsiveAppBar from "../components/AppBar/Appbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Box
          component="main"
          sx={{
            display: "flex",
            backgroundColor: "#424549",
            flexGrow: 1,
            width: { md: `calc(100%}px)` },
            height: "92vh",
            p: { xs: 2, sm: 3 },
          }}
        >
          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
