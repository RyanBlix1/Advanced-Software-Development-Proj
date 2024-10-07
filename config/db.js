const sqlite3 = require('sqlite3').verbose();
const dbName = 'incidentReport.db';

let db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Database connection was successful.");

        // Create 'incident' table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS incident (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            details TEXT,
            date TEXT,
            time TEXT,
            location TEXT,
            victimId TEXT,
            witnessId TEXT,
            offenderId TEXT,
            urgency TEXT,
            impact TEXT,
            riskAssessment TEXT
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("Table 'incident' created or verified.");
            }
        });

        // Create 'warnings' table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS warnings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            offenderId TEXT,
            warningDetails TEXT,
            status TEXT
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("Table 'warnings' created or verified.");
            }
        });
    }
});

module.exports = db;
