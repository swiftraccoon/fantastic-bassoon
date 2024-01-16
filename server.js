const rateLimit = require('express-rate-limit');
const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

// Logging Middleware
app.use(morgan('combined'));

// Define Rate Limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    handler: function (req, res, /*next*/) {
        // Log the attempt
        console.error(`Rate limit exceeded for IP: ${req.ip}`);
        res.status(429).send('Too many requests, please try again later.');
    },
    onLimitReached: function (req, /*res, options*/) {
        // Could integrate with a more sophisticated system for IP blocking
        console.warn(`IP blocked: ${req.ip}`);
    }
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// Your other routes and middleware...
