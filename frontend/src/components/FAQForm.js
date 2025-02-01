import React, { useState } from "react";
import { createFAQ } from "../services/faqService";
import './FAQForm.css';
const FAQForm = ({ refreshFAQs }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createFAQ(question, answer);
        refreshFAQs();  // Refresh FAQ list after adding
        setQuestion("");
        setAnswer("");
    };

    return (
        <div>
            <h2>Add New FAQ</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                />
                <button type="submit">Add FAQ</button>
            </form>
        </div>
    );
};

export default FAQForm;
