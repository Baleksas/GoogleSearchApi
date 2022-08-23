/* eslint-disable @next/next/no-img-element */
import { Box, Button, ImageListItemBar, Link } from "@mui/material";
import React from "react";

interface Props {
  name: string;
  link: string;
  image: string;
  size: string;
}

// Recommended song unit
const Song: React.FC<Props> = (props) => {
  return (
    <>
      <Link
        target="_blank"
        component={Button}
        variant="button"
        href={props.link}
        width={props.size}
        sx={{
          margin: "auto",
          alignSelf: "center",
          backgroundColor: "black",
        }}
      >
        <img
          height={props.size}
          width={props.size}
          src={props.image}
          srcSet={`${props.image}`}
          alt={props.name}
          loading="lazy"
        />
      </Link>

      <ImageListItemBar
        sx={{
          fontSize: "5px",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        title={props.name}
        // subtitle={}
        position="below"
      />
    </>
  );
};

export default Song;
