# 📚 LawPal – AI Legal Companion

LawPal is an AI-powered web application that helps users understand legal documents in plain English. Upload a contract, license, or agreement — and get instant AI-generated summaries, red flags, and your rights as the signer.

---

## 🚀 Features

- 📝 Upload legal documents in PDF format
- 🔍 Extracts and previews raw legal text
- 🤖 Uses OpenAI GPT-3.5 to analyze:
  - Main obligations
  - Risky/red flag clauses
  - Signer’s rights
- 📋 Displays results in an easy-to-read summary
- 💾 Stores uploaded content and analysis in MongoDB

---

## ⚙️ Tech Stack

| Frontend          | Backend                | AI/NLP           | Database              |
|-------------------|------------------------|------------------|-----------------------|
| React.js (CRA)    | Node.js + Express.js   | OpenAI GPT-3.5   | MongoDB (local/Atlas) |
| Axios             | Multer (file upload)   | pdf-parse        | Mongoose              |
| HTML/CSS          | dotenv, cors           |                  |                       |

---

## 📁 Folder Structure

LawPal/
├── lawpal_backend/ # Express server & API routes
│ ├── routes/
│ ├── controllers/
│ ├── config/
│ ├── uploads/ # Stored PDFs
│ └── .env
├── lawpal_frontend/ # React UI
│ ├── src/
│ └── public/

---

## 🛠️ Setup Instructions

🔧 Backend (Node.js + Express)

```bash
cd lawpal_backend
npm install

Create a .env file:
    MONGO_URI=mongodb://localhost:27017/lawpal
    OPENAI_API_KEY=your-openai-api-key

Start the server:
    node server.js


💻 Frontend (React)

cd lawpal_frontend
npm install
npm start

Access the app at http://localhost:3000    

🔐 Environment Variables
Key	              Purpose
MONGO_URI	      MongoDB connection string
OPENAI_API_KEY	  OpenAI GPT API key

📦 Dependencies
Backend:

express

mongoose

multer

openai

pdf-parse

dotenv

cors

Frontend:

react

axios

react-scripts

📌 Roadmap (Next Features)
 🔍 GPT-powered Q&A for contracts

 💾 Save & retrieve summaries from MongoDB

 📤 Export summaries as PDF reports

 🧑‍💼 User login system & history

 🔎 Auto-highlight legal clause types

🤝 Contributing
Contributions welcome! Fork this repo and submit a pull request.

📄 License
MIT License

📬 Contact
Author: Rajat Jaiswal
Project Name: LawPal – AI Legal Companion
GitHub: github.com/RajatJaiswal01