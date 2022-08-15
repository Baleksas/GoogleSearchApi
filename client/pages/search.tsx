import { ImageList, ImageListItem } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
  const [results, setResults] = useState(null);
  console.log(topResults);
  return (
    <div>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {topResults.map((result: any) => (
          <ImageListItem key={result.cacheId}>
            <Image
              src={`${result.pagemap.cse_image[0].src}?w=164&h=164&fit=crop&auto=format`}
              alt={result.title}
              layout="fill"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Search;
