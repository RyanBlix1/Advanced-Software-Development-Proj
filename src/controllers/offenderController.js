const { createOffender, readOffenders, updateOffender, deleteOffender, getOffenderById } = require('../models/offender');

// Create an offender
const createOffenderRecord = (req, res) => {
    const { firstName, surname, banStatus, warningID } = req.body;

    createOffender(firstName, surname, banStatus, warningID, (err, result) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        res.status(201).json({ message: 'Offender created successfully', id: result.id });
    });
};

// Get all offenders
const getOffenders = (req, res) => {
    readOffenders((err, offenders) => {
        if (err) {
            return res.status(500).send('Error retrieving offenders');
        }
        res.status(200).json(offenders);
    });
};

// Get offender by ID
const getOffender = (req, res) => {
    const { id } = req.params;

    getOffenderById(id, (err, offender) => {
        if (err) {
            return res.status(500).send('Error retrieving offender');
        }
        if (!offender) {
            return res.status(404).send('Offender not found');
        }
        res.status(200).json(offender);
    });
};

// Update offender details
const updateOffenderRecord = (req, res) => {
    const { id } = req.params;
    const { name, contact, offenceHistory } = req.body;

    updateOffender(id, name, contact, offenceHistory, (err) => {
        if (err) {
            return res.status(500).send('Error updating offender');
        }
        res.status(200).send('Offender updated successfully');
    });
};

// Delete an offender
const deleteOffenderRecord = (req, res) => {
    const { id } = req.params;

    deleteOffender(id, (err) => {
        if (err) {
            return res.status(500).send('Error deleting offender');
        }
        res.status(200).send('Offender deleted successfully');
    });
};

module.exports = {
    createOffenderRecord,
    getOffenders,
    getOffender,
    updateOffenderRecord,
    deleteOffenderRecord
};
