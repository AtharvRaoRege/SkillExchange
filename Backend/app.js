const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// This is important: express.json() middleware should be placed before routes
app.use(express.json()); // Middleware to parse incoming JSON bodies

// Connect to MongoDB
connectDB();

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
