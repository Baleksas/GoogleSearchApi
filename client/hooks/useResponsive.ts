import { Theme, useMediaQuery } from "@mui/material";

export const useResponsive = () => {
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return {
    isLg,
    isMd,
    isSm,
  };
};
