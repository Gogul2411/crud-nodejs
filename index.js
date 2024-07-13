const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Node API');
});

app.post('api/products', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

mongoose.connect('mongodb+srv://mgogul777:5C4XYCudtlIvbOS1@cluster0.74jhmds.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Database connected');
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        });
    })
    .catch((e) => {
        console.log(e);
        console.log('Connection Failed');
    });