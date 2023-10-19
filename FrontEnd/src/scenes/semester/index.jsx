import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import React, { useEffect, useState } from 'react';


import Header from "../../components/Header";

const Semester = () => {
  const [semesterData, setSemesterData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/Semester.json');

        // Use the relative path to the JSON file
        if (response.ok) {
          const data = await response.json();
          setSemesterData(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "ID", headerName: "ID" },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "StartDate",
      headerName: "Start Date",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "EndDate",
      headerName: "End Date",
      flex: 1,
    },

  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Semester" />
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
        }}
      >
        <DataGrid getRowId={(row) => row.ID} rows={semesterData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Semester;
