require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple API Route (Without Database)
app.get('/', (req, res) => {
    res.send('🚀 Backend is running on Railway!');
});

// Start Server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
