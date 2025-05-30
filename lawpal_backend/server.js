const dotenv = require('dotenv');
dotenv.config(); // ✅ Load environment variables

const app = require('./app');
const connectDB = require('./config/db');

connectDB(); // ✅ Now this can use process.env.MONGO_URI

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
