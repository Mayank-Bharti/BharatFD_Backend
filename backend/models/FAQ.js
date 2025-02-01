const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    translations: { type: Object, default: {} },  // Object to store translations
}, { timestamps: true });

module.exports = mongoose.model('FAQ', FAQSchema);

// 6379