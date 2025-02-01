const redis = require('redis');

// Creating a Redis client to connect to the default Redis instance (localhost:6379)
const client = redis.createClient();  

// Connect to Redis
client.connect();  

// Handle any connection errors
client.on('error', (err) => {
    console.error('Redis Client Error', err);
});

// Once connected, log success
client.on('connect', () => {
    console.log('✅ Redis Connected');
});

module.exports = client;  // Export the Redis client to be used in other files
