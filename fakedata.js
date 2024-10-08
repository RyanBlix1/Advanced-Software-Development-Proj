const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./incidentReport.db'); // Update the path to your actual database file

// Function to generate random data
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

// Function to insert false data
const insertFakeData = () => {
    const incidents = [];
    const urgencies = ['Low', 'Medium', 'High'];
    const impacts = ['Low', 'Medium', 'High'];
    const riskAssessments = ['Low', 'Medium', 'High'];

    // Generate 10 fake incidents
    for (let i = 0; i < 10; i++) {
        const details = `Incident ${i + 1}: A person had an accident at the location.`;
        const date = `${Math.floor(1 + Math.random() * 28).toString().padStart(2, '0')}/09/2024`; // Random date in September 2024
        const time = `${Math.floor(Math.random() * 23).toString().padStart(2, '0')}:${Math.floor(Math.random() * 59).toString().padStart(2, '0')}`; // Random time in HH:MM
        const location = `Level ${Math.floor(Math.random() * 10) + 1}, Ward ${Math.floor(Math.random() * 5) + 1}, Room ${Math.floor(Math.random() * 30) + 1}`;
        const urgency = getRandomItem(urgencies);
        const impact = getRandomItem(impacts);
        const riskAssessment = getRandomItem(riskAssessments);
        const victimID = Math.floor(10000000 + Math.random() * 90000000); // Random 8-digit number
        const witnessID = Math.floor(10000000 + Math.random() * 90000000); // Random 8-digit number
        const offenderID = Math.floor(10000000 + Math.random() * 90000000); // Random 8-digit number

        incidents.push([details, date, time, location, victimID, witnessID, offenderID, urgency, impact, riskAssessment]);
    }

    // SQL query to insert fake data into the incident table
    const sql = `
        INSERT INTO incident (Details, Date, Time, Location, VictimID, WitnessID, OffenderID, Urgency, Impact, RiskAssessment)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    // Insert each generated incident into the database
    db.serialize(() => {
        incidents.forEach(incident => {
            db.run(sql, incident, (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log('Fake incident inserted');
            });
        });
    });

    db.close();
};

const insertFakeOffenderData = () => {
    const offenders = [];
    const firstNames = ['John', 'Jane', 'Ben', 'Alice', 'Michael', 'Sarah'];
    const surnames = ['Smith', 'Doe', 'Brown', 'Wilson', 'Taylor', 'Johnson'];
    const banStatuses = ['Banned for life', 'Temporary ban', 'No ban', 'Under review'];
    const warningIDs = ['1001', '1002', '1003', '1004', '1005', '1006'];

    // Generate 10 fake offenders
    for (let i = 0; i < 10; i++) {
        const firstName = getRandomItem(firstNames);
        const surname = getRandomItem(surnames);
        const banStatus = getRandomItem(banStatuses);
        const warningID = getRandomItem(warningIDs);

        offenders.push([firstName, surname, banStatus, warningID]);
    }

    // SQL query to insert fake data into the offender table
    const sql = `
        INSERT INTO offender (firstName, surname, banStatus, warningID)
        VALUES (?, ?, ?, ?);
    `;

    // Insert each generated offender into the database
    db.serialize(() => {
        offenders.forEach(offender => {
            db.run(sql, offender, (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log('Fake offender inserted');
            });
        });
    });

    db.close();
};

insertFakeData();
insertFakeOffenderData();
