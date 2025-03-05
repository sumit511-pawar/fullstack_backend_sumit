require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all domains (for testing)
const corsOptions = {
  origin: "*", // Change to specific domain in production
  methods: "GET,POST",
  allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions));
app.use(express.json());

// Simple API Route (Without Database)
app.get('/', (req, res) => {
  res.send('🚀 Backend is running on Railway!');
});

// Start Server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
