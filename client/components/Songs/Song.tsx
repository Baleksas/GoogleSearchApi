/* eslint-disable @next/next/no-img-element */
import { Button, ImageListItemBar, Link } from "@mui/material";
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
      <img
        height={props.size}
        width={props.size}
        src={props.image}
        srcSet={`${props.image}`}
        alt={props.name}
        loading="lazy"
      />
      <ImageListItemBar
        sx={{ fontSize: "5px", maxWidth: "100%", maxHeight: "100%" }}
        title={props.name}
        subtitle={
          <Link component={Button} variant="button" href={props.link}>
            Listen now {">"}
          </Link>
        }
        position="below"
      />
    </>
  );
};

export default Song;
