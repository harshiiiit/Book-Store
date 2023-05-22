const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.use('/', bookRoutes);

mongoose.connect('mongodb://127.0.0.1/bookstore', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Additional route
app.get('/about', (req, res) => {
    res.send('About page');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});