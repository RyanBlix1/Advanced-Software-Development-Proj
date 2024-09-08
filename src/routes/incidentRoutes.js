const express = require('express');
const router = express.Router();
const { submitIncident, getIncidents, updateIncident, deleteIncident } = require('../controllers/incidentController');

router.post('/', submitIncident);

router.get('/', getIncidents);

router.put('/:id', updateIncident);

router.delete('/:id', deleteIncident);

module.exports = router;





