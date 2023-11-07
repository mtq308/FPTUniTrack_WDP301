import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoggedIn.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import StudentDetail from "../../../scenes/students/studentDetail";
import StudentEditProfile from "../../../scenes/students/studentEditProfile";
import Syllabus from "../../../scenes/syllabus";
import Curriculum from "../../../scenes/curriculum";
import Semester from "../../../scenes/semester";
import AdminRoutes from "../../../routes/AdminRoutes";

// import SemesterDetail from "../../../scenes/SemesterDetail";
import SemesterDetail from "../../../scenes/semester/SemesterDetail";
import CurriculumDetail from "../../../scenes/curriculum/CurriculumDetail";

import Lecture from "../../../scenes/lecture";
import Notification from "../../../scenes/notification";
import Grade from "../../../scenes/grade";

const LoggedIn = ({ logout }) => {
  console.log("hi")
  const [theme, colorMode] = useMode();
  const navigate = useNavigate();
  // Define the handleLogout function
  const handleLogout = () => {
    // Assuming you are using token-based authentication
    // Clear user authentication state by removing the token from local storage
    localStorage.removeItem("token");
    navigate("/auth/login");

    // You can also clear other user-related information or perform additional cleanup

    // After clearing the authentication state, you can redirect the user to the login page or any other appropriate page.
    // You can use the `navigate` function from `react-router-dom` for navigation.
    // For example, if you are using React Router, you can navigate to the login page like this:
    // import { useNavigate } from "react-router-dom";
    // const navigate = useNavigate();
    // navigate("/login");
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar logout={handleLogout} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />

              <Route path="/admin/*" element={<AdminRoutes />} />

              {/* <Route path="/students" element={<Students />} />
              <Route path="/students/:studentId" element={<StudentDetail />} />
              <Route
                path="/students/:studentId/edit"
                element={<StudentEditProfile />}
              /> */}
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/semester" element={<Semester />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />

              <Route
                path="/semester/:semesterId"
                element={<SemesterDetail />}
              />
              <Route
                path="/curriculum/:curriculumId"
                element={<CurriculumDetail />}
              />

              <Route path="/lecture" element={<Lecture />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/grade" element={<Grade />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default LoggedIn;
