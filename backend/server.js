require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const redis = require('redis');

const faqRoutes = require('./routes/faqRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB Connected')).catch(err => console.error(err));

// Redis Client
const redisClient = redis.createClient();
redisClient.connect();
redisClient.on('error', (err) => console.error('Redis Error:', err));

app.use('/api/faqs', faqRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port http://localhost:${PORT}`));
