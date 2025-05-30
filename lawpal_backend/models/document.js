const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  uploadDate: {
    type: Date,
    default: Date.now
  },
  content: String // Parsed raw text
});

module.exports = mongoose.model('Document', documentSchema);
