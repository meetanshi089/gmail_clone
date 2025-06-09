const Email = require("../models/Email");

exports.sendEmail = async (req, res) => {
  try {
    const newEmail = new Email(req.body);
    await newEmail.save();
    res.status(201).json(newEmail);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEmails = async (req, res) => {
  try {
    const emails = await Email.find().sort({ timestamp: -1 });
    res.json(emails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
