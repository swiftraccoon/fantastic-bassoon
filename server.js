const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

app.post('/transcription', (req, res) => {
    // Handle the transcription data here
    console.log(req.body);
    res.status(200).send('Data received');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
