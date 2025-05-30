const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/upload', uploadRoutes);

app.get("/", (req, res) => {
  res.send("✅ LawPal Backend is running.");
});

module.exports = app;
