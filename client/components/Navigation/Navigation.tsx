import React from "react";
import { Box, Drawer } from "@mui/material";
import { drawerWidth } from "./constants";
import { NavList } from "./NavList";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const Navigation = ({ open, onClose }: Props) => (
  <Box
    component="div"
    sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
  >
    {/* Mobile variant */}
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <>
        <Box
          p={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 3,
          }}
        >
          {/* <UserAvatar /> */}
        </Box>
        <NavList onClose={onClose} testID="mob" />
      </>
    </Drawer>

    {/* Desktop variant */}
    <Drawer
      variant="permanent"
      open
      sx={{
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <>
        <Box p={3}>{/* <TdsLogo testID="dt" /> */}</Box>
        <NavList onClose={onClose} testID="dt" />
      </>
    </Drawer>
  </Box>
);
