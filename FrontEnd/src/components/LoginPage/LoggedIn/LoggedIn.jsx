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
import Students from "../../../scenes/students";
import Syllabus from "../../../scenes/syllabus";
import Curriculum from "../../../scenes/curriculum";
import Semester from "../../../scenes/semester";

const LoggedIn = ({ logout }) => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar logout={logout} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/students" element={<Students />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/semester" element={<Semester />} />
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
