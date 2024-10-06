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
            victimId TEXT,
            witnessId TEXT,
            offenderId TEXT,
            urgency TEXT,
            impact TEXT,
            riskAssessment TEXT
        );
        CREATE TABLE IF NOT EXISTS offender (
            offenderID INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName TEXT,
            surname TEXT,
            banStatus TEXT,
            warningID TEXT
        );`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("Tables 'incident' & 'offender' created or verified.");
            }
        });
    }
});

module.exports = db;


