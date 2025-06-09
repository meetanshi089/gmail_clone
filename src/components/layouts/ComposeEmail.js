// ComposeEmail.js
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

function ComposeEmail({ open, handleClose }) {
  const [form, setForm] = useState({ to: "", subject: "", body: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (form.to && form.subject) {
      try {
        const response = await fetch("http://localhost:5000/api/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sender: "your@email.com", // or logged-in user
            recipient: form.to,
            subject: form.subject,
            body: form.body,
          }),
        });

        if (response.ok) {
          console.log("Email sent!");
          setForm({ to: "", subject: "", body: "" });
          handleClose();
        } else {
          console.error("Failed to send email");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        New Message
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
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

      <DialogActions>
        <Button variant="contained" onClick={handleSubmit}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ComposeEmail;
