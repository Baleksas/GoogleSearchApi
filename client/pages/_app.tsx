import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [searchText, setSearchText] = useState(null);
  return (
    <>
      <Navbar />
      <Component {...pageProps} searchText setSearchText />
    </>
  );
}

export default MyApp;
