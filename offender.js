const db = require('../../config/db.js');

// CREATE - Add a new offender
const createOffender = (firstName, surname, banStatus, warningID, callback) => {
    const sql = `INSERT INTO offender (firstName, surname, banStatus, warningID) VALUES (?, ?, ?, ?)`;
    db.run(sql, [firstName, surname, banStatus, warningID], function(err) {
        callback(err, { id: this.lastID });
    });
};

// READ - Get all offenders
const readOffenders = (callback) => {
    const sql = 'SELECT * FROM offender';
    db.all(sql, [], callback);
};

// UPDATE - Update offender details
const updateOffender = (id, name, contact, offenceHistory, callback) => {
    const sql = `UPDATE offender SET name = ?, contact = ?, offenceHistory = ? WHERE id = ?`;
    db.run(sql, [name, contact, offenceHistory, id], callback);
};

// DELETE - Delete an offender record
const deleteOffender = (id, callback) => {
    const sql = 'DELETE FROM offender WHERE id = ?';
    db.run(sql, id, callback);
};

// Get offender by ID
const getOffenderById = (id, callback) => {
    const query = 'SELECT * FROM offender WHERE id = ?';
    db.get(query, [id], (err, row) => {
        callback(err, row);
    });
};

module.exports = { createOffender, readOffenders, updateOffender, deleteOffender, getOffenderById };
