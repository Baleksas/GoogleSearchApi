import { Container, createTheme } from "@mui/material";
import type { NextPage } from "next";

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
const Home: NextPage = () => {
  return <Container maxWidth="xl">HI</Container>;
};

export default Home;
