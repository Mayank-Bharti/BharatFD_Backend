const API_BASE_URL = "http://localhost:5000/api/faqs";  // Change to your backend URL

// Fetch all FAQs with optional language translation
export const getFAQs = async (lang = "en") => {
    try {
        const response = await fetch(`${API_BASE_URL}?lang=${lang}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        return [];
    }
};

// Fetch a single FAQ by ID
export const getFAQById = async (id, lang = "en") => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}?lang=${lang}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching FAQ:", error);
        return null;
    }
};

// Create a new FAQ
export const createFAQ = async (question, answer) => {
    try {
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question, answer }),
        });

        return await response.json();
    } catch (error) {
        console.error("Error creating FAQ:", error);
        return null;
    }
};

// Delete an FAQ by ID
export const deleteFAQ = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
        return await response.json();
    } catch (error) {
        console.error("Error deleting FAQ:", error);
        return null;
    }
};
