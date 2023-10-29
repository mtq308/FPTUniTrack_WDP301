import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import React, { useEffect, useState } from 'react';


import Header from "../../components/Header";
//Hello
const Lecture = () => {
  const [lectureData, setlectureData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/Lectures.json');

        // Use the relative path to the JSON file
        if (response.ok) {
          const data = await response.json();
          setlectureData(data);
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
      field: "Username",
      headerName: "Username",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "FirstName",
      headerName: "First Name",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Middle",
      headerName: "Middle",
      flex: 1,
    },
    {
      field: "Last",
      headerName: "Last",
      flex: 1,
    },
    {
      field: "DoB",
      headerName: "DoB",
      flex: 1,
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
    }
    ,
    {
      field: "Address",
      headerName: "Address",
      flex: 1,
    }
    ,
    {
      field: "Gender",
      headerName: "Gender",
      flex: 1,
    }
    ,
    {
      field: "IsActive",
      headerName: "IsActive",
      flex: 1,
    }

  ];

  return (
    <Box m="20px">
      <Header title="LECTURE" subtitle="Managing the Lecture" />
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
        <DataGrid           
          getRowId={(row) => row.Username}
          rows={lectureData} 
          columns={columns} />
      </Box>
    </Box>
  );
};

export default Lecture;