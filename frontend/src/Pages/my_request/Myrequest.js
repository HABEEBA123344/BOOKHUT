import React from "react";
import { useNavigate } from "react-router-dom";
import "./Myrequests.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Myrequest({ request }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = async () => {
    setOpen(false)
    const response = await fetch("requests/" + request._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      console.log(json);
      navigate("/profile");
    }
  };
  return (
    <div className="request1">
      <div>
        <p>
          {/* <b>Book id: </b>{request.id} */}
          <b>Name:</b> {request.book_name}
        </p>
      </div>

      <div className="detail">
        <button className="btn btn-primary info" onClick={handleClickOpen}>
          Cancel request
        </button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Cancel Request"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to cancel the request?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              No
            </Button>
            <Button onClick={handleClick} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
