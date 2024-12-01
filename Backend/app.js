const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Import cors
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Import and use authentication routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));