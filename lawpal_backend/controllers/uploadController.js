const fs = require('fs');
const pdfParse = require('pdf-parse');

exports.handleFileUpload = async (req, res) => {
  try {
    const filePath = req.file.path;

    const buffer = fs.readFileSync(filePath);
    const data = await pdfParse(buffer);

    // Optional: Save parsed text to database here

    res.status(200).json({
      message: '✅ File uploaded and parsed successfully!',
      content: data.text.slice(0, 1000) // limit for preview
    });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: 'Failed to parse the file.' });
  }
};
