import {
  Alert,
  Box,
  Button,
  FilledInput,
  FormControl,
  ImageList,
  ImageListItem,
  InputLabel,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import type { NextPage } from "next";
import { useState } from "react";
import Song from "../../components/Songs/Song";

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
        if ((data.context.title = "MusicSearch")) setReceivedData(data.items);
        else {
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
      <FormControl
        variant="outlined"
        sx={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
        }}
      >
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
          <ImageList
            sx={{
              width: 1000,
              maxHeight: "50vh",
              maxWidth: "100%",
              overflowX: "hidden",
            }}
            cols={2}
            rowHeight={220}
          >
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
