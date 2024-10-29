const db = require('../../config/db.js');

// CREATE
const createItem = (details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, manager, status, callback) => {
    console.log('Starting createItem function');
    console.log('Parameters:', { details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, manager, status });
    
    const sql = `INSERT INTO incident (details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, manager, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    console.log('SQL Query:', sql);
    
    db.run(sql, [details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, manager, status], function(err) {
        if (err) {
            console.error("Error executing insert:", err.message);
            callback(err, null);
        } else {
            console.log("Insert successful, Incident ID:", this.lastID);
            callback(null, { id: this.lastID });
        }
    });
};

// READ
const readItem = (callback) => {
    const sql = 'SELECT * FROM incident';
    db.all(sql, [], callback);
};

// UPDATE
const updateItem = (id, details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, manager, status, callback) => {
    console.log('Starting updateItem function');
    console.log('Updating incident with ID:', id);
    console.log('New values:', { details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, manager, status });

    const sql = `UPDATE incident SET details = ?, date = ?, time = ?, location = ?, victimId = ?, witnessId = ?, offenderId = ?, urgency = ?, impact = ?, riskAssessment = ?, manager = ?, status = ? WHERE id = ?`;
    console.log('SQL Query:', sql);

    db.run(sql, [details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, manager, status, id], function(err) {
        if (err) {
            console.error("Error executing update:", err.message);
            callback(err);
        } else {
            console.log("Update successful for Incident ID:", id);
            callback(null);
        }
    });
};

// DELETE
const deleteItem = (id, callback) => {
    const sql = 'DELETE FROM incident WHERE id = ?';
    db.run(sql, id, callback);
};

// Get incident by ID
const getItemById = (id, callback) => {
    const query = 'SELECT * FROM incident WHERE id = ?';
    db.get(query, [id], (err, row) => {
        callback(err, row);
    });
};


module.exports = { createItem, readItem, updateItem, deleteItem, getItemById };

