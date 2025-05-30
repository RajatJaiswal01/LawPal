const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    // Log to confirm it's being read
    console.log("🔍 MONGO_URI:", mongoURI);

    if (!mongoURI) {
      throw new Error("❌ MONGO_URI is undefined. Check your .env file and dotenv setup.");
    }

    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
