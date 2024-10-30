// src/server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8001;

app.use(bodyParser.json());

let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/tasks', (req, res) => {
    const task = req.body.text;
    tasks.push(task);
    res.json({ message: 'Task added successfully' });
});

app.get('/tasks', (req, res) => {
    res.json({ tasks: tasks });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});