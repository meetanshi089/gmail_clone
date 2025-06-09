const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
  subject: String,
  body: String,
  isRead: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Email", emailSchema);
