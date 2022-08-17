import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import ResponsiveAppBar from "../components/Appbar";
import { Container } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResponsiveAppBar />
      <Container
        sx={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "lightblue",
          height: "auto",
        }}
        maxWidth="lg"
      >
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
