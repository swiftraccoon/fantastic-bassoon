const express = require('express');
const router = express.Router();

const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.get('X-API-KEY');
    const additionalHeader = req.get('X-Additional-Header');

    if (!apiKey || apiKey !== 'Your_Secret_API_Key' || !additionalHeader || additionalHeader !== 'Expected-Value') {
        return res.status(401).send('Unauthorized');
    }
    next();
};


router.post('/transcription', apiKeyMiddleware, (req, res) => {
    // Your POST logic here
});

module.exports = router;
