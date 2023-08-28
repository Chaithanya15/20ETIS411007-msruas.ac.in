
const express = require('express');
const app = express();
const port = 3000;

app.get('/numbers', (req, res) => {
    const urls = req.query.URL;

    // Process the URLs and return the desired response
    // You will need to implement this logic

    res.json({ result: 'Numbers fetched successfully' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
