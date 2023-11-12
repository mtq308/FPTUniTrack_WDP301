import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";


// import Context from "../store/Context";
import axios from "axios";

const Lecture = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [lecturers, setLecturers] = useState([]);
  
  
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
  
        const response = await axios.post(
          "http://localhost:3456/admin/getAllLecturers",
          {
            role: "Admin", // Include the role data in the request body
          },
          {
            headers: {
              Authorization: token, // Send the token in the request headers
            }
          }
        );
  
        setLecturers(response.data);
        console.log(response.data); // Set the fetched lecturers in the state
      } catch (error) {
        console.error("Error fetching lecturers:", error);
        // Handle error as needed
      }
    }; // Fetch lecturers when the component mounts
    fetchLecturers();
  }, []);
  const handleLectureDetail = (params) => {
    const lecturerId = params.row.id;
    navigate(`/lecture/${lecturerId}`);
  };
  // add new lecture funtion
  // const [idCounter, setIdCounter] = useState(1);
  // const [input, setInput] = useState({
  //   rollNumber: "",
  //   LectureUserName: "",
  //   IDCard: "",
  //   LastName: "",
  //   MiddleName: "",
  //   FirstName: "",
  //   Gender: false,
  //   Address: "",
  //   DateOfBirth: null,
  //   MobilePhone: "",
  //   Email: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput((prevInput) => ({
  //     ...prevInput,
  //     [name]: value,
  //   }));
  // };
  // const handleAddLecture = () => {
  //   const newLecture = {
  //     id: idCounter,
  //     rollNumber: input.rollNumber,
  //     LectureUserName: input.LectureUserName,
  //     IDCard: input.IDCard,
  //     LastName: input.LastName,
  //     MiddleName: input.MiddleName,
  //     FirstName: input.FirstName,
  //     Gender: input.Gender,
  //     Address: input.Address,
  //     DateOfBirth: input.DateOfBirth,
  //     MobilePhone: input.MobilePhone,
  //     Email: input.Email,
  //   };

  //   setLecturers((prevData) => [...prevData, newLecture]);
  //   setIdCounter(idCounter + 1);
  //   setInput({
  //     rollNumber: "",
  //     LectureUserName: "",
  //     IDCard: "",
  //     LastName: "",
  //     MiddleName: "",
  //     FirstName: "",
  //     Gender: "female",
  //     Address: "",
  //     DateOfBirth: null,
  //     MobilePhone: "",
  //     Email: "",
  //   });
  //   setOpen(false);
  // };

  // //delete lecture function
  // const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
  //   useState(false);
  // const [lectureToDelete, setLectureToDelete] = useState(null);

  // const handleDeleteLecture = (lectureId) => {
  //   const lectureToDelete = lecturers.find(
  //     (lecture) => lecture.id === lectureId
  //   );
  //   setLectureToDelete(lectureToDelete);
  //   setIsDeleteConfirmationOpen(true);
  // };
  // const confirmDeleteLecture = () => {
  //   if (lectureToDelete) {
  //     const { id } = lectureToDelete;
  //     const updatedData = lecturers.filter(
  //       (lecture) => lecture.id !== lectureToDelete.id
  //     );
  //     setLecturers(updatedData);
  //     setIsDeleteConfirmationOpen(false);
  //   }
  // };
  // const cancelDeleteLecture = () => {
  //   setIsDeleteConfirmationOpen(false);
  // };

  //define column
  const columns = [
    {
      field: "id",
      headerName: "Roll Number",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "LectureUserName",
      headerName: "Username",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Fullname",
      headerName: "Full Name",
      flex: 1,
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1.5,
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "Gender",
      headerName: "Gender",
      flex: 1,
    },
    {
      field: "IsActive",
      headerName: "IsActive",
      flex: 1,
    },
    // {
    //   field: "delete",
    //   headerName: "Actions",
    //   sortable: false,
    //   width: 100,
    //   renderCell: (params) => (
    //     <Button
    //       variant="contained"
    //       color="error"
    //       onClick={() => handleDeleteLecture(params.row.id)}
    //     >
    //       Delete
    //     </Button>
    //   ),
    // },
  ];

  return (
    // <Context.Provider>
      <Box m="20px">
        <Stack direction="row">
          <Header title="LECTURERS" subtitle="List of lecturers" />
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
                bgcolor: "#a4a9fc",
                color: "white",
              },
            }}
          >
            Add Lecturer
          </Button>
        </Stack>

        {/* Create lecturer modal*/ }
        {/* <Modal
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
                theme.palette.mode === "dark"
                  ? colors.blueAccent[900]
                  : "white",
              color:
                theme.palette.mode === "dark" ? colors.primary[100] : "black",
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
              CREATE NEW LECTURER
            </Typography>

            <Stack direction="column">
              <Stack direction="row">
                <TextField
                  id="outlined-basic"
                  label="Roll Number"
                  variant="outlined"
                  sx={{ mt: 3, width: 250 }}
                  name="rollNumber"
                  value={input.rollNumber}
                  onChange={handleInputChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  sx={{ mt: 3, ml: 3, width: 250 }}
                  name="LectureUserName"
                  value={input.LectureUserName}
                  onChange={handleInputChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Id Card"
                  variant="outlined"
                  sx={{ mt: 3, ml: 3, width: 250 }}
                  name="IDCard"
                  value={input.IDCard}
                  onChange={handleInputChange}
                />
              </Stack>
              <Stack direction="row">
                <TextField
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                  sx={{ mt: 3 }}
                  name="LastName"
                  value={input.LastName}
                  onChange={handleInputChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Middle name"
                  variant="outlined"
                  sx={{ mt: 3, ml: 3 }}
                  name="MiddleName"
                  value={input.MiddleName}
                  onChange={handleInputChange}
                />
                <TextField
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
                  sx={{ mt: 3, mb: 3, ml: 3 }}
                  name="FirstName"
                  value={input.FirstName}
                  onChange={handleInputChange}
                />
                <FormControl sx={{ ml: 3, mt: 3.5 }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    sx={{ ml: 3 }}
                    name="Gender"
                    value={input.Gender}
                    onChange={handleInputChange}
                  >
                    <Stack direction="row">
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Stack>
              <Stack direction="row">
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  sx={{ mt: 1, width: 830 }}
                  name="Address"
                  value={input.Address}
                  onChange={handleInputChange}
                />
              </Stack>
              <Stack direction="row">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ mt: 3 }}
                    label="Date of Birth"
                    name="DateOfBirth"
                    value={input.DateOfBirth}
                    onChange={(date) =>
                      handleInputChange({
                        target: { name: "DateOfBirth", value: date },
                      })
                    }
                  />
                </LocalizationProvider>
                <TextField
                  type="number"
                  label="Mobile phone"
                  variant="outlined"
                  sx={{ ml: 3, mt: 3, width: 280 }}
                  name="MobilePhone"
                  value={input.MobilePhone}
                  onChange={handleInputChange}
                />
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  sx={{ mt: 3, ml: 3, width: 400 }}
                  name="Email"
                  value={input.Email}
                  onChange={handleInputChange}
                />
              </Stack>
              <Stack direction="row" sx={{ mt: 5, ml: 80 }}>
                <Button
                  variant="outlined"
                  onClick={handleAddLecture}
                  sx={{
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? colors.grey[400]
                        : "white",
                    color:
                      theme.palette.mode === "dark"
                        ? colors.primary[100]
                        : "black",
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
                      theme.palette.mode === "dark"
                        ? colors.grey[400]
                        : "white",
                    color:
                      theme.palette.mode === "dark"
                        ? colors.primary[100]
                        : "black",
                  }}
                >
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Modal> */}
        
        {/*This is cofirm delete modal*/}
        {/* <Modal
          open={isDeleteConfirmationOpen}
          onClose={cancelDeleteLecture}
          aria-labelledby="delete-confirmation-modal-title"
          aria-describedby="delete-confirmation-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { lg: 400, xs: 300 },
              bgcolor: theme.palette.mode === "dark" ? "#333" : "white",
              color: theme.palette.mode === "dark" ? "#FFFFFF" : "black",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="delete-confirmation-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontWeight: 700 }}
            >
              Delete Confirmation
            </Typography>
            <Typography
              id="delete-confirmation-modal-description"
              sx={{ mt: 2 }}
            >
              {`Do you want to delete ${
                lectureToDelete ? lectureToDelete.id : ""
              } lecture?`}
            </Typography>
            <Stack direction="row" sx={{ mt: 5, ml: 20 }}>
              <Button
                variant="outlined"
                onClick={confirmDeleteLecture}
                sx={{
                  bgcolor:
                    theme.palette.mode === "dark" ? colors.grey[400] : "white",
                  color:
                    theme.palette.mode === "dark"
                      ? colors.primary[100]
                      : "black",
                  mr: 3,
                }}
              >
                Yes
              </Button>
              <Button
                variant="outlined"
                onClick={cancelDeleteLecture}
                sx={{
                  bgcolor:
                    theme.palette.mode === "dark" ? colors.grey[400] : "white",
                  color:
                    theme.palette.mode === "dark"
                      ? colors.primary[100]
                      : "black",
                }}
              >
                No
              </Button>
            </Stack>
          </Box>
        </Modal> */}

        {/* This is the start of the table view lecturers list */}
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
            // onRowClick={handleLectureDetail}
            onCellClick={(params) => {
              if (params.field === "id") {
                handleLectureDetail(params);
              }
            }}  
            rows={lecturers}
            components={{ Toolbar: GridToolbar }}
            columns={columns}
          />
        </Box>
      </Box>
    // </Context.Provider>
  );
};

export default Lecture;