// src/server.js
const express = require('express');
const app = express();

const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});