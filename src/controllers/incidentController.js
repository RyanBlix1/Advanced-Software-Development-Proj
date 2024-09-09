const { createItem, readItem, updateItem, deleteItem, getItemById } = require('../models/incident');

const submitIncident = ('/', (req, res) => {
    const { details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment } = req.body;

    createItem(details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, (err) => {
        if (err) {
            return res.status(500).send('Error creating incident');
        }
        res.status(201).send('Incident created successfully');
    });
});

const getIncidentById = (req, res) => {
    const { id } = req.params;

    getItemById(id, (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        if (!row) {
            return res.status(404).send('Incident not found');
        }
        res.status(200).json(row);
    });
};

const getIncidents = (req, res) => {
    readItem((err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        console.log()
        res.status(200).json(rows);
    });
};

const updateIncident = (req, res) => {
    const { id } = req.params;
    const { details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment } = req.body;

    console.log(`Updating incident with ID: ${id}`);
    console.log('Request Body:', req.body);

    updateItem(id, details, date, time, location, victimId, witnessId, offenderId, urgency, impact, riskAssessment, (err) => {
        if (err) {
            console.error('Error updating incident:', err);
            return res.status(500).send('Error updating incident');
        }
        res.status(200).send(`Incident with ID ${id} updated`);
    });
};



const deleteIncident = (req, res) => {
    const { id } = req.params;
    console.log(`Received ID for deletion: ${id}`);

    if (!id) {
        return res.status(400).send('ID parameter is missing');
    }

    deleteItem(id, (err) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send(`Incident with ID ${id} deleted`);
    });
};

module.exports = { submitIncident, getIncidents, updateIncident, deleteIncident, getIncidentById };