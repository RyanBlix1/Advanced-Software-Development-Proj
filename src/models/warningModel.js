// warningModel.js

const db = require('../../config/db.js'); // Replace with your actual db connection

// Create a new warning
const createWarning = (offenderId, warningDetails, status, callback) => {
    const sql = `INSERT INTO warnings (offenderId, warningDetails, status) VALUES (?, ?, ?)`;
    db.run(sql, [offenderId, warningDetails, status], callback);
};

// Update warning status
const updateWarningStatus = (id, status, callback) => {
    const sql = `UPDATE warnings SET status = ? WHERE id = ?`;
    db.run(sql, [status, id], callback);
};

// Get all warnings
const getWarnings = (callback) => {
    const sql = `SELECT * FROM warnings`;
    db.all(sql, [], callback);
};

// Delete a warning
const deleteWarning = (id, callback) => {
    const sql = `DELETE FROM warnings WHERE id = ?`;
    db.run(sql, [id], callback);
};

module.exports = { createWarning, updateWarningStatus, getWarnings, deleteWarning };
