import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Security from "./Security";
import SettingsLayout from "./SettingsLayout";

const Settings = () => {
  return (
    <SettingsLayout>
      <Routes>
        <Route path="/*" element={<Profile />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </SettingsLayout>
  );
};

export default Settings;
