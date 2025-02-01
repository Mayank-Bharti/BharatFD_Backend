const express = require('express');
const { getFAQs, createFAQ, getFAQById, updateFAQ, deleteFAQ } = require('../controllers/faqController');  // Ensure correct path for the controller

const router = express.Router();

// ✅ Route to get all FAQs
router.get('/', getFAQs);  // This will call the getFAQs controller

// ✅ Route to create a new FAQ
router.post('/', createFAQ);  // This will call the createFAQ controller

// ✅ Route to get a single FAQ by ID
router.get('/:id', getFAQById);  // This will call the getFAQById controller


// ✅ Route to delete an FAQ by ID
router.delete('/:id', deleteFAQ);  // This will call the deleteFAQ controller

module.exports = router;
