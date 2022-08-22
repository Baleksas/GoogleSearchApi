import { Logout } from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { ElementType, FC } from "react";
import { useLocation } from "react-router-dom";

const Nav = styled(List)<{ component?: ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

type Props = {
  onClose: () => void;
  testID: string;
};

export const NavList: FC<Props> = ({ onClose, testID }) => {
  const { pathname } = useLocation();

  return (
    <Nav component="nav" disablePadding data-testid={`${testID}-nav`}>
      <Box sx={{ display: { xs: "block", md: "none" }, mt: 3 }}>
        <ListItemButton
          component={"a"}
          onClick={() => {
            onClose();
          }}
          data-testid="mob-nav-link-logout"
        >
          <ListItemIcon sx={{ fontSize: 20 }}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>
    </Nav>
  );
};
