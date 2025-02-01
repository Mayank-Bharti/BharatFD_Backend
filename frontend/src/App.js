import React, { useState } from "react";
import FAQList from "../src/components/faq";
import FAQForm from "../src/components/FAQForm";

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const refreshFAQs = () => setRefresh(!refresh);

    return (
        <div>
            <h1>FAQ Management</h1>
            <FAQForm refreshFAQs={refreshFAQs} />
            <FAQList key={refresh} />
        </div>
    );
};

export default App;
