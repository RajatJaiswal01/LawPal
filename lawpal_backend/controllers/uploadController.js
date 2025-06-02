const fs = require('fs');
const pdfParse = require('pdf-parse');
const Document = require('../models/Document');

exports.handleFileUpload = async (req, res) => {
  try {
    const filePath = req.file.path;

    const buffer = fs.readFileSync(filePath);
    const data = await pdfParse(buffer);

    // Save to MongoDB
    const savedDoc = await Document.create({
      filename: req.file.filename,
      originalName: req.file.originalname,
      content: data.text
    });

    res.status(200).json({
      message: '✅ File uploaded and saved successfully!',
      documentId: savedDoc._id,
      content: data.text
    });

  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: 'Failed to parse or save the file.' });
  }
};
