import React, { useState } from "react";

const LanguageSelector = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    setSelectedLanguage(value);
    onLanguageChange(value); // Pass the selected language to the parent
  };

  return (
    <div className="language-selector">
      <h3>Language</h3>
      <label>
        <input
          type="radio"
          name="language"
          value="en"
          checked={selectedLanguage === "en"}
          onChange={handleLanguageChange}
        />
        English
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="mr"
          checked={selectedLanguage === "mr"}
          onChange={handleLanguageChange}
        />
        Marathi
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="hi"
          checked={selectedLanguage === "hi"}
          onChange={handleLanguageChange}
        />
        Hindi
      </label>
    </div>
  );
};

export default LanguageSelector;