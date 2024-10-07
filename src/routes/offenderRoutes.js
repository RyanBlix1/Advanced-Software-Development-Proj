const express = require('express');
const router = express.Router();
const { createOffenderRecord, getOffenders, getOffender, updateOffenderRecord, deleteOffenderRecord } = require('../controllers/offenderController');

// Route to create an offender
router.post('/', createOffenderRecord);

// Route to get all offenders
router.get('/', getOffenders);

// Route to get an offender by ID
router.get('/:id', getOffender);

// Route to update offender details
router.put('/:id', updateOffenderRecord);

// Route to delete an offender by ID
router.delete('/:id', deleteOffenderRecord);

module.exports = router;
