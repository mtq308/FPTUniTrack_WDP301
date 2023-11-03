import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import React, { useEffect, useState } from 'react';
import {
  useTheme,
  Button,
  Stack,
  Modal,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Header from "../../components/Header";

const Notification = () => {
  const [notificationData, setnotificationData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
    { field: "ID", headerName: "ID", flex: 0.2 },
    {
      field: "Title",
      headerName: "Title",
      flex: 0.7,
    },
    {
      field: "Content",
      headerName: "Content",
      type: "string",
      headerAlign: "left",
      align: "left",
      flex: 1.2,

    },
    {
      field: "DateTime",
      headerName: "Date Time",
      flex: 0.5,
    }

  ];

  return (
    <Box m="20px">
      <Stack direction="row">
      <Header title="NOTIFICATIONS" subtitle="Managing the Notification" />
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            borderRadius: "5px",
            ml: { lg: "820px", xs: "304px" },
            backgroundColor:
              theme.palette.mode === "dark" ? "#3e4396" : "#a4a9fc",
            color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
            ":hover": {
              bgcolor: "#a4a9fc", // theme.palette.primary.main
              color: "white",
            },
          }}
        >
          Add Notification
        </Button>
      </Stack>

      {/* This is the start of the modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { lg: 900, xs: 700 },
          bgcolor:
            theme.palette.mode === "dark" ? colors.blueAccent[900] : "white", // Adjust the color here
          color:
            theme.palette.mode === "dark" ? colors.primary[100] : "black", // Adjust the text color here
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
        style={{ maxHeight: 700, overflow: "auto" }}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700 }}
          >
            CREATE NEW NOTIFICATION
          </Typography>

          <Stack  direction="column">
            <Stack direction="row">
            <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                sx={{ mt: 3, width: 400 }}
              />
            </Stack>
            <Stack direction="row">
              <TextField
                id="outlined-basic"
                label="Content"
                variant="outlined"
                sx={{ mt: 3, width: 900 }}
              />
            </Stack>

            <Stack direction="row" sx={{ mt: 3 }}>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Date of Birth" />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>
          </Stack>

          <Stack direction="row" sx={{ mt: 5, ml: 80 }}>
            <Button
              variant="outlined"
              onClick={() => {}}
              sx={{
                bgcolor:
                  theme.palette.mode === "dark" ? colors.grey[400] : "white",
                color:
                  theme.palette.mode === "dark" ? colors.primary[100] : "black",
                mr: 3,
              }}
            >
              Create
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                bgcolor:
                  theme.palette.mode === "dark" ? colors.grey[400] : "white",
                color:
                  theme.palette.mode === "dark" ? colors.primary[100] : "black",
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
      {/* This is the end of the modal */}

      {/* This is the start of the table view notification list */}
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