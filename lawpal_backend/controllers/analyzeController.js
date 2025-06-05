const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.analyzeDocument = async (req, res) => {
  try {
    const { content } = req.body;

     console.log("📩 Received analysis request");
     console.log("🔐 OPENAI_API_KEY:", process.env.OPENAI_API_KEY ? "Loaded ✅" : "Missing ❌");

    if (!content) {
      return res.status(400).json({ error: 'No content provided' });
    }

    const prompt = `
You are a legal assistant AI. Analyze the following legal document and answer:
1. What are the main obligations mentioned?
2. Are there any red flags or risky clauses?
3. What rights or protections does the signer have?

Return your analysis in clear bullet points.

TEXT:
${content.slice(0, 3000)}  <!-- GPT-3.5 handles up to ~16k tokens; we keep it short for cost & performance -->
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5,
    });

    res.json({ summary: response.choices[0].message.content.trim() });

  } catch (err) {
  console.error("❌ GPT Error:", err); // full error object
  res.status(500).json({ error: err.message || 'Failed to analyze document.' });
  }
};
