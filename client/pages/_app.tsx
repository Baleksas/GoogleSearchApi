import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import ResponsiveAppBar from "../components/AppBar/Appbar";
import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { drawerWidth } from "./search/constants";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
          p: { xs: 2, sm: 3 },
          pt: { xs: 9, sm: 11 },
        }}
      >
        <Component {...pageProps} />
      </Box>
    </Box>
  );
}

export default MyApp;
