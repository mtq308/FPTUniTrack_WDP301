import React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./../scenes/students/index";
import StudentDetail from "./../scenes/students/studentDetail";
import StudentEditProfile from "./../scenes/students/studentEditProfile";
import Dashboard from "../scenes/dashboard";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:studentId" element={<StudentDetail />} />
            <Route
                path="/students/:studentId/edit"
                element={<StudentEditProfile />}
            />
        </Routes>
    );
};

export default AdminRoutes;