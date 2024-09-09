const db = require('../../config/db.js');

// CREATE
const createItem = (details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, callback) => {
    const sql = `INSERT INTO incident (details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.run(sql, [details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment], function(err) {
        callback(err, { id: this.lastID });
    });
};

// READ
const readItem = (callback) => {
    const sql = 'SELECT * FROM incident';
    db.all(sql, [], callback);
};

// UPDATE
const updateItem = (id, details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, callback) => {
    const sql = `UPDATE incident SET details = ?, date = ?, time = ?, location = ?, victimId = ?, witnessId = ?, offenderId = ?, urgency = ?, impact = ?, riskAssessment = ? WHERE id = ?`;
    db.run(sql, [details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, id], callback);
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

