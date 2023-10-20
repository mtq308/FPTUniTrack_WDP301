import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import React, { useEffect, useState } from 'react';


import Header from "../../components/Header";

const Notification = () => {
  const [notificationData, setnotificationData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/Notifications.json');

        // Use the relative path to the JSON file
        if (response.ok) {
          const data = await response.json();
          setnotificationData(data);
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
    { field: "ID", headerName: "ID", flex: 0.5 },
    {
      field: "Title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "Content",
      headerName: "Content",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "DateTime",
      headerName: "Date Time",
      flex: 1,
    }

  ];

  return (
    <Box m="20px">
      <Header title="NOTIFICATION" subtitle="Managing the Notification" />
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
          getRowId={(row) => row.ID}
          rows={notificationData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Notification;