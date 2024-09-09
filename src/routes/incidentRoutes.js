const express = require('express');
const router = express.Router();
const { submitIncident, getIncidents, updateIncident, deleteIncident, getIncidentById } = require('../controllers/incidentController');

router.post('/', submitIncident);
router.get('/', getIncidents);
router.put('/:id', updateIncident);
router.delete('/:id', deleteIncident);
router.get('/:id', getIncidentById); 

module.exports = router;