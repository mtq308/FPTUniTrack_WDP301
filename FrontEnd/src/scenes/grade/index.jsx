import { Box, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import { tokens } from "../../theme";
const Grade = () => {
  const [gradeData, setGradeData] = useState([]);
  console.log(gradeData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/TestGrade.json');

        // Use the relative path to the JSON file
        if (response.ok) {
          const data = await response.json();
          setGradeData(data);

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

    {
      field: "scoreName",
      headerName: "Score Name",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "grade",
      headerName: "Grade",
      flex: 0.5,
      type: "string",
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column--cell",

    }
  ];
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Grade" />
      <h1>Grade Part</h1>
      <Box
        m="40px 0 0 0"
        height="50vh"
        width="40vw"
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
        <DataGrid getRowId={(row) => row.scoreName} rows={gradeData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Grade;
