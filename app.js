const express = require('express');
const path = require('path');
const incidentRoutes = require('./src/routes/incidentRoutes');
const warningRoutes = require('./src/routes/warningRoutes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use('/api/incident', incidentRoutes);
app.use('/api/warning', warningRoutes);

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

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

app.get('/edit-incident/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID from URL path:', id);
    res.sendFile(path.join(__dirname, 'src', 'views', 'editIncident.html'));
});

app.get('/warning', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'warning.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});