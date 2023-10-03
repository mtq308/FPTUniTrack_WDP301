import React from "react";
import "./LoggedIn.css";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "../../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../../scenes/global/Sidebar";
import Topbar from "../../../scenes/global/Topbar";
import Dashboard from "../../../scenes/dashboard";
import Team from "../../../scenes/team";
import Contacts from "../../../scenes/contacts";
import Form from "../../../scenes/form";
import Calendar from "../../../scenes/calendar";

const LoggedIn = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default LoggedIn;
