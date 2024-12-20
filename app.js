const session = require('express-session');
const express = require('express');
const path = require('path');
const incidentRoutes = require('./src/routes/incidentRoutes');
const offenderRoutes = require('./src/routes/offenderRoutes');
const warningRoutes = require('./src/routes/warningRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use('/api/incident', incidentRoutes);
app.use('/api/offender', offenderRoutes);
app.use('/api/warning', warningRoutes);

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

//login
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if ((username === 'admin' && password === 'admin') || (username === 'user' && password === 'user')) {
        req.session.user = { username };
        return res.redirect('/');
    } else {
        return res.status(401).send('Invalid credentials');
    }
});

app.use((req, res, next) => {
    if (!req.session.user && req.url !== '/login') {
        return res.redirect('/login');
    }
    next();
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'login.html'));
});

//join in at index
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

app.get('/offender-form', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'offenderForm.html'));
});

app.get('/view-offenders', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'viewOffenders.html'));
});

app.get('/edit-offender/:id', (req, res) => {
    const id = req.params.id;
    res.sendFile(path.join(__dirname, 'src', 'views', 'editOffender.html'));
});
  
app.get('/warning', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'warning.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });