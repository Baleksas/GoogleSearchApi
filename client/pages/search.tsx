import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
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
      {topResults.map((result: any) => (
        <React.Fragment key={result.cacheId}>
          <div>{result.link}</div>
          <a rel="noreferrer" href={result.link} target="_blank">
            {result.title}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Search;
