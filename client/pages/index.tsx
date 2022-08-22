import { Container } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context: any) {
  const search_text = "I love you";
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API}&cx=${process.env.CX}&q=${search_text}}`;
  const req = await fetch(url);
  const data = await req.json();
  // const topResults = data.items;
  return {
    props: {
      // topResults,
    },
  };
}
const Home: NextPage = () => {
  return <Container maxWidth="md">Home page</Container>;
};

export default Home;
