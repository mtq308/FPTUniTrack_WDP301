import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import React, { useEffect, useState } from 'react';


import Header from "../../components/Header";

const Curriculum = () => {
  const [curriculumData, setCurriculumData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/Curriculum.json');

        // Use the relative path to the JSON file
        if (response.ok) {
          const data = await response.json();
          setCurriculumData(data);
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
    { field: "Id", headerName: "ID", flex: 0.5 },
    {
      field: "Code",
      headerName: "CODE",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Name",
      headerName: "Name",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "DescriptionNo",
      headerName: "DescriptionNo",
      flex: 1,
    },
    {
      field: "TotalCredit",
      headerName: "Total Credit",
      flex: 1,
    },

  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Curriculum" />
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
        <DataGrid getRowId={(row) => row.Id} rows={curriculumData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Curriculum;
