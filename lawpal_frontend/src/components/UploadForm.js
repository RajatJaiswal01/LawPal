import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [parsedText, setParsedText] = useState('');
  const [message, setMessage] = useState('');
  const [analysis, setAnalysis] = useState('');


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setParsedText('');
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('❌ Please select a PDF file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setParsedText(res.data.content || '');
      setMessage(res.data.message || '✅ File uploaded successfully!');
    } catch (error) {
      console.error(error);
      setMessage('❌ Upload failed. Please try again.');
    }
  };

  const handleAnalyze = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/analyze', {
      content: parsedText,
    });

    setAnalysis(res.data.summary);
  } catch (err) {
    console.error(err);
    setAnalysis('❌ Failed to get analysis.');
  }
};


  return (
    <div className="upload-form">
      <h2>📄 Upload Legal Document</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      {parsedText && (
        <div>
          <h3>🧾 Parsed Text Preview:</h3>
          <pre style={{ maxHeight: '300px', overflowY: 'scroll', backgroundColor: '#f9f9f9', padding: '10px' }}>
            {parsedText}
          </pre>
          <button onClick={handleAnalyze} style={{ marginTop: '10px' }}>
            Analyze with AI
          </button>
        </div>
      )}

      {analysis && (
        <div>
          <h3>🧠 AI Legal Summary:</h3>
          <pre style={{ background: '#f4f4f4', padding: '10px' }}>
            {analysis}
          </pre>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
