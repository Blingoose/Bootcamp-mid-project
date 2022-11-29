import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Lock } from "@mui/icons-material";
import Button from "@mui/material/Button";
import "../styles/Nav.css";
import profileImg from "../img/sweet-dog.jpg";

export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [currentUser, setCurrentUser] = useState(profileImg);

  return (
    <React.Fragment>
      <Box className="login-popup-box">
        {!currentUser ? (
          <Button
            className="login-text-button"
            startIcon={<Lock className="login-icon" />}
          >
            Login
          </Button>
        ) : (
          <Tooltip
            componentsProps={{
              tooltip: {
                sx: {
                  color: "white",
                  backgroundColor: "#9031aa",
                  fontSize: "12px",
                },
              },
            }}
            placement="right"
            title="Account settings"
          >
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{ width: 50, height: 50 }}
                className="login-avatar"
                src={profileImg}
              >
                {currentUser?.displayName?.charAt(0).toUpperCase() ||
                  currentUser?.email?.charAt(0).toUpperCase()}
              </Avatar>
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 2,
          sx: {
            border: "2px solid #9031aa",
            color: "purple",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              borderTop: "2px solid #9031aa",
              borderLeft: "2px solid #9031aa",
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-60%) translateX(-60px) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings sx={{ color: "#9031aa" }} fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout sx={{ color: "#9031aa" }} fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}