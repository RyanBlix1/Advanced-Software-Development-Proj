const express = require('express');
const path = require('path');
const incidentRoutes = require('./src/routes/incidentRoutes'); // Ensure this path is correct

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index page at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

// Serve the incident form at /incident
app.get('/incident', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'incidentView.html'));
});

// Use the incident routes for API requests
app.use('/api/incident', incidentRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
