import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./ComposeEmail.css";
function ComposeEmail({ open, handleClose, onSend }) {
  const [form, setForm] = useState({ to: "", subject: "", body: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (form.to && form.subject) {
      onSend({
        sender: form.to,
        subject: form.subject,
        body: form.body,
      });
      setForm({ to: "", subject: "", body: "" });
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          position: "absolute",
          bottom: 16,
          right: 16,
          m: 0,
          borderRadius: 2,
          boxShadow: 3,
        },
      }}
    >
      <DialogTitle className="compose-title">
        New Message
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent className="compose-content" dividers>
        <TextField
          label="To"
          name="to"
          value={form.to}
          onChange={handleChange}
          fullWidth
          variant="standard"
          margin="dense"
        />
        <TextField
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          fullWidth
          variant="standard"
          margin="dense"
        />
        <TextField
          label="Message"
          name="body"
          value={form.body}
          onChange={handleChange}
          fullWidth
          multiline
          rows={10}
          variant="outlined"
          margin="dense"
        />
      </DialogContent>

      <DialogActions className="compose-actions">
        <Button variant="contained" onClick={handleSubmit}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ComposeEmail;
