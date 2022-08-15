import { ImageList, ImageListItem, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Song from "../components/Song";

export async function getServerSideProps(context: any) {
  const search_text = "I love you";
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API}&cx=${process.env.CX}&q=${search_text}}`;
  const req = await fetch(url);
  const data = await req.json();
  const topResults = data.items;
  return {
    props: {
      topResults,
    }, // will be passed to the page component as props
  };
}
const Search: NextPage = ({ topResults }: any) => {
  const router = useRouter();
  const customSearch = null;
  console.log(router);
  return (
    <div>
      <Typography variant="h4">
        {customSearch
          ? "Recommended songs from your source"
          : "There was an issue. Here are some reccomendations to disocver:"}{" "}
      </Typography>
      <ImageList sx={{ width: 1000, height: 600 }} cols={4} rowHeight={250}>
        {topResults.map((result: any) => (
          <ImageListItem key={result.cacheId}>
            <Song
              size={"150"}
              name={result.title}
              link={result.link}
              image={`${result.pagemap.cse_image[0].src}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Search;
