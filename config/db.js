const sqlite3 = require('sqlite3').verbose();
const dbName = 'incidentReport.db';

let db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Database connection was successful.");
        db.run(`CREATE TABLE IF NOT EXISTS incident (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            details TEXT,
            date TEXT,
            time TEXT,
            location TEXT,
            victimId INTEGER,
            witnessId INTEGER,
            offenderId INTEGER,
            urgency TEXT,
            impact TEXT,
            riskAssessment INTEGER
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("Table 'incident' created or verified.");
            }
        });
    }
});

module.exports = db;

