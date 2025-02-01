const FAQ = require('../models/FAQ');  // Assuming you have a FAQ model
const { translateText } = require('../services/translationService');  // Import the translation function
const redisClient = require('../config/redis');  // Redis client setup

// ✅ Controller to Get FAQs with Translations (Cache support)
exports.getFAQs = async (req, res) => {
    const lang = req.query.lang || 'en';  // Default to English if no language is provided
    const cacheKey = `faqs_${lang}`;  // Cache key based on language

    try {
        // Check if the FAQs are already cached in Redis
        const cachedFAQs = await redisClient.get(cacheKey);
        if (cachedFAQs) {
            // If cached data exists, return it from Redis
            console.log('Returning FAQs from cache');
            return res.json(JSON.parse(cachedFAQs));
        }

        // Fetch FAQs from MongoDB
        const faqs = await FAQ.find();  // Ensure you have the correct model and connection
        console.log('Returning FAQs from MongoDB');

        if (faqs.length === 0) {
            return res.json([]);  // Return an empty array if no FAQs are found
        }

        // Map over FAQs and return translations based on the requested language
        const translatedFAQs = faqs.map(faq => {
            const translatedQuestion = faq.translations[lang]?.question || faq.question;
            const translatedAnswer = faq.translations[lang]?.answer || faq.answer;

            return {
                _id: faq._id,
                question: translatedQuestion,
                answer: translatedAnswer,
                createdAt: faq.createdAt,
                updatedAt: faq.updatedAt,
                translations: faq.translations  // Include all translations in the response
            };
        });

        // Cache the fetched FAQs for 1 hour (3600 seconds)
        await redisClient.setEx(cacheKey, 10, JSON.stringify(translatedFAQs));

        // Return the FAQs with translations
        res.json(translatedFAQs);
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        res.status(500).json({ error: 'Server error: Unable to fetch FAQs' });
    }
};

// ✅ Controller to Create an FAQ with Translations (Store both original and translated questions/answers)
exports.createFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;

        // Check if the question and answer are provided
        if (!question || !answer) {
            return res.status(400).json({ error: "Question and Answer are required" });
        }

        // Translate the question and answer into Hindi (or any other supported languages)
        const translatedQuestion = await translateText(question);
        const translatedAnswer = await translateText(answer);

        // Fallback to original question/answer if translation fails
        if (!translatedQuestion || !translatedQuestion.question) {
            console.warn("Translation failed for question, using original");
            translatedQuestion.question = question;
        }

        if (!translatedAnswer || !translatedAnswer.answer) {
            console.warn("Translation failed for answer, using original");
            translatedAnswer.answer = answer;
        }

        // Create a new FAQ with the original question, answer, and translations
        const newFAQ = await FAQ.create({
            question,  // Store the original question
            answer,    // Store the original answer
            translations: {
                hi: {
                    question: translatedQuestion.question,  // Store translated question
                    answer: translatedAnswer.answer         // Store translated answer
                }
            }
        });

        // Clear the Redis cache for FAQs since new data has been added
        redisClient.del('faqs');  // Invalidate the cache

        // Respond with the newly created FAQ
        res.status(201).json(newFAQ);
    } catch (error) {
        console.error('Error creating FAQ:', error);
        res.status(500).json({ error: 'Server error: Unable to create FAQ' });
    }
};

// ✅ Controller to Get a Single FAQ by ID with Redis Caching
exports.getFAQById = async (req, res) => {
    const lang = req.query.lang || 'en';  // Default to English if no language is provided
    const cacheKey = `faq_${req.params.id}_${lang}`;  // Cache key based on FAQ ID and language

    try {
        // Check if the FAQ is cached in Redis
        const cachedFAQ = await redisClient.get(cacheKey);
        if (cachedFAQ) {
            // If cached FAQ exists, return it
            console.log('Returning FAQ from cache');
            return res.json(JSON.parse(cachedFAQ));
        }

        // If not cached, fetch the FAQ from MongoDB
        const faq = await FAQ.findById(req.params.id);
        if (!faq) {
            return res.status(404).json({ error: 'FAQ not found!' });
        }

        // Get the translation for the requested language
        const translatedQuestion = faq.translations[lang]?.question || faq.question;
        const translatedAnswer = faq.translations[lang]?.answer || faq.answer;

        const translatedFAQ = {
            _id: faq._id,
            question: translatedQuestion,
            answer: translatedAnswer,
            createdAt: faq.createdAt,
            updatedAt: faq.updatedAt,
            translations: faq.translations
        };

        // Cache the FAQ in Redis for 1 hour (3600 seconds)
        await redisClient.setEx(cacheKey, 3600, JSON.stringify(translatedFAQ));

        // Return the FAQ
        res.json(translatedFAQ);
    } catch (error) {
        console.error('Error fetching FAQ:', error);
        res.status(500).json({ error: 'Server error: Unable to fetch FAQ' });
    }
};

// ✅ Controller to Delete an FAQ and Clear Redis Cache
exports.deleteFAQ = async (req, res) => {
    try {
        // Find and delete the FAQ by ID
        const faq = await FAQ.findByIdAndDelete(req.params.id);
        if (!faq) {
            return res.status(404).json({ error: 'FAQ not found!' });
        }

        // Invalidate the Redis cache for this FAQ (for all languages)
        redisClient.del(`faq_${faq._id}_en`);  // Invalidate English cache for this FAQ
        redisClient.del(`faq_${faq._id}_hi`);  // Invalidate Hindi cache for this FAQ

        // Invalidate the main FAQs cache for the language (this will be refreshed on the next GET request)
        redisClient.del(`faqs_en`);  // Invalidate English cache for all FAQs
        redisClient.del(`faqs_hi`);  // Invalidate Hindi cache for all FAQs

        // Return success message
        res.status(200).json({ message: 'FAQ deleted successfully!' });
    } catch (error) {
        console.error('Error deleting FAQ:', error);
        res.status(500).json({ error: 'Server error: Unable to delete FAQ' });
    }
};
