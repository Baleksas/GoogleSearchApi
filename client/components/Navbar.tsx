import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ResponsiveAppBar from "./Appbar";

const Navbar: NextPage = () => {
  return (
    <div>
      <ResponsiveAppBar />
    </div>
  );
};

export default Navbar;
