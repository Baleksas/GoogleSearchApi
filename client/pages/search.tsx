import {
  Alert,
  Box,
  Button,
  FilledInput,
  FormControl,
  ImageList,
  ImageListItem,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Song from "../components/Song";

export async function getServerSideProps(context: any) {
  // const search_text = "I love you";
  // const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API}&cx=${process.env.CX}&q=${search_text}}`;
  // const req = await fetch(url);
  // const data = await req.json();
  // const topResults = data.items;
  return {
    props: {
      // topResults,
    },
  };
}
const Search: NextPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [error, setError] = useState<{
    errorStatus: string;
    errorCode: number;
  } | null>(null);
  const [receivedData, setReceivedData] = useState<Array<object>>();

  const fetchSongs = async () => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API}&cx=${process.env.CX}&q=${searchText}}`;
    console.log("Search url: ", url);

    fetch(url)
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        if (data.ok) setReceivedData(data);
        if (!data.ok) {
          console.log(data);
          setError({
            errorCode: data.error.code,
            errorStatus: data.error.status,
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <Container>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Search</InputLabel>
        <FilledInput
          id="component-filled"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Button
          onClick={() => fetchSongs()}
          variant="contained"
          color="primary"
          type="submit"
        >
          Search
        </Button>
        {error && (
          <Alert severity="error">
            {error.errorCode}:{error.errorStatus}
          </Alert>
        )}
      </FormControl>

      {receivedData && (
        <Box>
          <Typography variant="h4">
            Recommended songs from your source
          </Typography>
          <ImageList sx={{ width: 1000, height: 600 }} cols={4} rowHeight={250}>
            {receivedData.map((result: any) => (
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
        </Box>
      )}
    </Container>
  );
};

export default Search;
