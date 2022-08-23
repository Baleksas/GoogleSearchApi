import MenuIcon from "@mui/icons-material/Menu";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Link from "next/link";
import * as React from "react";
const pages = ["Search"];

const ResponsiveAppBar: NextPage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "8vh",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MusicNoteIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Arial",
              fontWeight: 700,
              letterSpacing: "-.05rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ONNote
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography
                    variant="h6"
                    noWrap
                    component={Link}
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "Arial",
                      fontWeight: 700,
                      color: "inherit",
                      textDecoration: "none",
                    }}
                    href={`/${page.toLowerCase()}`}
                  >
                    <Button
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                      }}
                      onClick={handleCloseNavMenu}
                    >
                      {page}
                    </Button>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MusicNoteIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Arial",
              fontWeight: 700,
              letterSpacing: "-.05rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ONNote
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography
                  variant="body1"
                  noWrap
                  component={Link}
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "Arial",
                    fontWeight: 700,
                    letterSpacing: "-.05rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  href={`/${page.toLowerCase()}`}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
