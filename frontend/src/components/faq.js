import React, { useEffect, useState } from "react";
import { getFAQs, deleteFAQ } from "../services/faqService";
import './faq.css'; 
const FAQList = () => {
    const [faqs, setFAQs] = useState([]);
    const [language, setLanguage] = useState("en");  // Default language is English

    useEffect(() => {
        fetchFAQs(language);
    }, [language]);

    const fetchFAQs = async (lang) => {
        const data = await getFAQs(lang);
        setFAQs(data);
    };

    const handleDelete = async (id) => {
        await deleteFAQ(id);
        fetchFAQs(language); // Refresh after delete
    };

    return (
        <div>
            <h2>Frequently Asked Questions</h2>

            {/* Language Selection */}
            <label>Select Language: </label>
            <select onChange={(e) => setLanguage(e.target.value)} value={language}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
            </select>

            <ul>
                {faqs.map((faq) => (
                    <li key={faq._id}>
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
                        <button onClick={() => handleDelete(faq._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQList;
