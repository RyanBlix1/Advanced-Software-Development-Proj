const express = require('express');
const router = express.Router();
const { submitWarning, updateWarning, getAllWarnings, deleteWarningById } = require('../controllers/warningController');

// Route to submit a new warning
router.post('/', submitWarning);

// Route to update a warning's status
router.put('/:id', updateWarning);

// Route to fetch all warnings
router.get('/', getAllWarnings);

// Route to delete a warning
router.delete('/:id', deleteWarningById);

module.exports = router;
