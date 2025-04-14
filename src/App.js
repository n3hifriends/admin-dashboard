import React, { useState } from "react";
import { Tabs, Tab} from "@mui/material";
import UserOverview from "./components/UserOverview";
import ExcelUpload from "./components/ExcelUpload";
import CurrentAffairs from "./components/CurrentAffairs";
import YouTubeManager from "./components/YouTubeManager";
import LanguageSelector from "./components/LanguageSelector";

import "./App.css";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Update the selected language
  };

  const handleResetLanguage = () => {
    setSelectedLanguage(""); // Reset the selected language
  };
  return (
    <div className="admin-panel">
      <UserOverview />
      <LanguageSelector onLanguageChange={handleLanguageChange} />

      <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
        <Tab label="Upload Excel" />
        <Tab label="Current Affairs" />
        <Tab label="YouTube Manager" />
      </Tabs>
      <div className="tab-content">
        {activeTab === 0 && <ExcelUpload  language={selectedLanguage}
            onResetLanguage={handleResetLanguage}/>}
        {activeTab === 1 && <CurrentAffairs language={selectedLanguage}
            onResetLanguage={handleResetLanguage} />}
        {activeTab === 2 && <YouTubeManager language={selectedLanguage}
            onResetLanguage={handleResetLanguage} />}
      </div>
    </div>
  );
};

export default AdminPanel;
