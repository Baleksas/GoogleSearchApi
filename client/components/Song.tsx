import { Box, Link, Typography } from "@mui/material";
import React from "react";

interface Props {
  name: string;
  link: string;
  image: string;
}

const Song: React.FC<Props> = (props) => {
  return (
    <Box>
      <Typography>{props.name}</Typography>
      <Link>{props.link}</Link>
    </Box>
  );
};

export default Song;
