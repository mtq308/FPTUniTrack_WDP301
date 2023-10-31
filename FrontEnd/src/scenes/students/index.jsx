import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

import { studentsData } from "../../data/studentData";

const Students = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const columns = [
    { field: "id", headerName: "Roll Number", flex: 0.5 },
    {
      field: "Fullname",
      headerName: "Full Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Gender",
      headerName: "Gender",
      flex: 0.5,
    },
    {
      field: "IDCard",
      headerName: "ID Card",
      flex: 1,
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "Specialization",
      headerName: "Specialization",
      flex: 0.5,
    },
  ];

  return (
    <Box m="20px">
      <Stack direction="row">
        <Header title="STUDENTS" subtitle="List of students" />
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            borderRadius: "5px",
            ml: { lg: "920px", xs: "304px" },
            backgroundColor:
              theme.palette.mode === "dark" ? "#3e4396" : "#a4a9fc",
            color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
            ":hover": {
              bgcolor: "#a4a9fc", // theme.palette.primary.main
              color: "white",
            },
          }}
        >
          Add Student
        </Button>
      </Stack>

      {/* This is the start of the modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
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
          style={{ maxHeight: 700, overflow: "auto" }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700 }}
          >
            CREATE NEW STUDENT
          </Typography>

          <Stack direction="column">
            <Stack direction="row">
              <TextField
                id="outlined-basic"
                label="Full name"
                variant="outlined"
                sx={{ mt: 3, mb: 2, width: 300 }}
              />
              <FormControl sx={{ ml: 3, mt: 3.5 }}>
                <Stack direction="row">
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    sx={{ ml: 3 }}
                  >
                    <Stack direction="row">
                      <FormControlLabel
                        value="female"
                        control={
                          <Radio
                            sx={{
                              "&, &.Mui-checked": {
                                color: "silver",
                              },
                            }}
                          />
                        }
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={
                          <Radio
                            sx={{
                              "&, &.Mui-checked": {
                                color: "silver",
                              },
                            }}
                          />
                        }
                        label="Male"
                      />
                    </Stack>
                  </RadioGroup>
                </Stack>
              </FormControl>
            </Stack>

            <Stack direction="row">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Date of Birth" />
                </DemoContainer>
              </LocalizationProvider>
              <TextField
                type="number"
                id="outlined-basic"
                label="ID Card"
                variant="outlined"
                sx={{ ml: 3, mt: 1, width: 600 }}
              />
            </Stack>

            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              sx={{ mt: 3, width: 830 }}
            />

            <Stack direction="row">
              <TextField
                type="number"
                label="Phone"
                variant="outlined"
                sx={{ mt: 3, width: 420 }}
              />
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                sx={{ mt: 3, ml: 3, width: 420 }}
              />
            </Stack>
            <Stack direction="row">
              <TextField
                label="Member code"
                variant="outlined"
                sx={{ mt: 3, width: 250 }}
              />
              <FormControl sx={{ mt: 3, ml: 3, width: 150 }}>
                <InputLabel id="demo-simple-select-label">
                  Chuyen nganh
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Chuyen nganh"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>SE</MenuItem>
                  <MenuItem value={20}>IA</MenuItem>
                  <MenuItem value={30}>GD</MenuItem>
                  <MenuItem value={30}>AI</MenuItem>
                  <MenuItem value={30}>IB</MenuItem>
                  <MenuItem value={30}>IS</MenuItem>
                  <MenuItem value={30}>...</MenuItem>
                  <MenuItem value={30}>...</MenuItem>
                  <MenuItem value={30}>...</MenuItem>
                  <MenuItem value={30}>...</MenuItem>
                  <MenuItem value={30}>...</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            {/* Tam thoi khong can Full name vi ta co the lay Last name + Middle name + First name la se ra Full name */}
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

      {/* This is the start of the table view student list */}
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
          //getRowId={(row) => row.id}
          rows={studentsData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={(params) => {
            const studentId = params.row.id;
            // Navigate to the student detail page
            navigate(`/students/${studentId}`);
          }}
        />
      </Box>
      {/* This is the end of the table view student list */}
    </Box>
  );
};

export default Students;
