import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Subject = () => {
  //Get user role & token to fetch data
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  //URL require lowercase text for user role
  //example: localhost:3456/admin/... not localhost:3456/Admin/...
  //so we need to transfer the role variable to lowercase text!
  const roleParams = role.toLowerCase();

  const [subjects, setSubjects] = useState([]);

  const navigate = useNavigate;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3456/${roleParams}/getAllSubjects`,
          {
            headers: {
              Authorization: token, // Send the token in the request headers
            }
          }
        );

        setSubjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
        // Handle error as needed
      }
    };
    fetchSubjects();
  }, [token]);

  const columns = [
    {
      field: "SubjectID",
      headerName: "Subject ID",
      flex: 0.3,
      cellClassName: "name-column--cell",
    },
    {
      field: "SubjectCode",
      headerName: "Subject Code",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "SyllabusName",
      headerName: "Syllabus Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "PREQUISITE",
      headerName: "Prerequisite",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "IsActive",
      headerName: "Is Active",
      flex: 0.3,
      cellClassName: "name-column--cell",
    },
  ];

  return (
    <Box m="20px">
      <Header title="SUBJECTS" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row.SubjectID}
          rows={subjects}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={(params) => {
            const subjectId = params.row.SubjectID;
            console.log(subjectId);
            navigate(`/subject/${subjectId}`);
          }}
        />
      </Box>
    </Box>
  );
};

export default Subject;
