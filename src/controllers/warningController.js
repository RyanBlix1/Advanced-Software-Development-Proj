const { createWarning, updateWarningStatus, getWarnings, deleteWarning } = require('../models/warningModel');

// Submit a new warning
const submitWarning = (req, res) => {
    const { offenderId, warningDetails, status } = req.body;
    createWarning(offenderId, warningDetails, status, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error creating warning' });
        }
        res.status(201).json({ message: 'Warning created successfully' });
    });
};

// Update an existing warning's status
const updateWarning = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    updateWarningStatus(id, status, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error updating warning' });
        }
        res.status(200).json({ message: 'Warning status updated' });
    });
};

// Get all warnings
const getAllWarnings = (req, res) => {
    getWarnings((err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching warnings' });
        }
        res.status(200).json(rows); // Ensure this sends the warnings as JSON
    });
};

// Delete a warning
const deleteWarningById = (req, res) => {
    const { id } = req.params;
    deleteWarning(id, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error deleting warning' });
        }
        res.status(200).json({ message: 'Warning deleted' });
    });
};



module.exports = { submitWarning, updateWarning, getAllWarnings, deleteWarningById };
