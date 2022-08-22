import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { drawerWidth } from "./constants";
import { AppBar } from "material-ui";
export const PageLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar onClick={handleDrawerToggle} /> */}
      {/* <Navigation open={mobileOpen} onClose={handleDrawerToggle} /> */}

      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
          p: { xs: 2, sm: 3 },
          pt: { xs: 9, sm: 11 },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
