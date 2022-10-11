import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mybooks.scss";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Mybook({ book }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClick = async () => {
    setOpen(false);
    const response = await fetch("books/" + book._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      window.alert("Book deleted");
      navigate("/home");
    }
  };
  const [status,setStatus] = useState(book.status)
  const [editOpen, setEditOpen] = React.useState(false);

  const handleEditClickOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleInput = (e) => {
    setStatus(e.target.value)
  };
  const editStatus = async () => {
    setEditOpen(false);
    const res = await fetch("books/" + book._id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.message) {
      window.alert(data.message);
    }
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="book10">
      <div>
        <p>
          <b>Name:</b> {book.name}
        </p>
        <p>
          <b>Author :</b> {book.author}
        </p>
        <p>
          <b>Category :</b> {book.category}
        </p>
        <p>
          <b>Language :</b> {book.language}
        </p>
        <p>
          <b>Status :</b> {status}
        </p>
      </div>
      <div className="buttonsss">
        <button
          className="btn btn-primary info delete"
          onClick={handleClickOpen}
        >
          Delete Book
        </button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Delete Book"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClick} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        <button className="btn btn-primary info editss" onClick={handleEditClickOpen}>
          Edit Status
        </button>
        <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the new status below (Available/Not Available)
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="status"
            label="Status"
            fullWidth
            variant="standard"
            value={status}
            onChange={handleInput}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={editStatus}>Edit</Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  );
}
