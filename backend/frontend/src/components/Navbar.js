import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="home">
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <NavLink
              activeClassName="active"
              className="nav-link scrollto"
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="nav-link  scrollto"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="nav-link scrollto"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="nav-link scrollto"
              to="/notification"
            >
              <span
                className="iconify noti"
                data-icon="clarity:notification-line"
              ></span>
            </NavLink>
          </li>
          <li>
            <button
              className="getstarted scrollto logout"
              onClick={handleClickOpen}
            >
              Logout
            </button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Logout"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to logout?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Cancel
                </Button>
                <Button onClick={handleClick} autoFocus>
                  Logout
                </Button>
              </DialogActions>
            </Dialog>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  );
}
