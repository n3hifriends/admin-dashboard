import React, { useState } from "react";
import { Tabs, Tab} from "@mui/material";
import UserOverview from "./components/UserOverview";
import ExcelUpload from "./components/ExcelUpload";
import CurrentAffairs from "./components/CurrentAffairs";
import YouTubeManager from "./components/YouTubeManager";
import "./App.css";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="admin-panel">
      <UserOverview />
      <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
        <Tab label="Upload Excel" />
        <Tab label="Current Affairs" />
        <Tab label="YouTube Manager" />
      </Tabs>
      <div className="tab-content">
        {activeTab === 0 && <ExcelUpload />}
        {activeTab === 1 && <CurrentAffairs />}
        {activeTab === 2 && <YouTubeManager />}
      </div>
    </div>
  );
};

export default AdminPanel;
