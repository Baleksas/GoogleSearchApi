/* eslint-disable @next/next/no-img-element */
import { Box, ImageListItemBar, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  link: string;
  image: string;
  size: string;
}

const MainPage: React.FC<Props> = (props) => {
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
      {/* <Link>{props.link}</Link> */}
      <ImageListItemBar
        sx={{ fontSize: "5px", maxWidth: "100%", maxHeight: "100%" }}
        title={props.name}
        subtitle={<span>by: Testing</span>}
        position="below"
      />
    </>
  );
};

export default MainPage;
