const { createItem, readItem, updateItem, deleteItem } = require('../models/incident');

const submitIncident = (req, res) => {
    const { details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment } = req.body;

    createItem(details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, (err, data) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).send(`Incident reported with ID: ${data.id}`);
    });
};

const getIncidents = (req, res) => {
    readItem((err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).json(rows);
    });
};

const updateIncident = (req, res) => {
    const { id } = req.params;
    const { details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment } = req.body;

    updateItem(id, details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, (err) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Incident updated successfully.');
    });
};

const deleteIncident = (req, res) => {
    const { id } = req.params;

    deleteItem(id, (err) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Incident deleted successfully.');
    });
};

module.exports = { submitIncident, getIncidents, updateIncident, deleteIncident };