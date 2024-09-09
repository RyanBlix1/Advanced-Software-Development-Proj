const express = require('express');
const path = require('path');
const incidentRoutes = require('./src/routes/incidentRoutes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

app.get('/incident', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'incidentView.html'));
});

app.get('/view-incidents', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'allincidents.html'));
});

app.get('/edit-incident', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'editIncident.html'));
});

app.use('/api/incident', incidentRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
