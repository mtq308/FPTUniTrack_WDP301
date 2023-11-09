import React, { useState } from "react";
import {
  useTheme,
  Button,
  Stack,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate, useParams } from "react-router-dom";
import { lecturersData } from "../../data/lectureData";
import Header from "../../components/Header";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const LectureEditProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const { lectureId } = useParams();
  const lecture = lecturersData.find((lecture) => lecture.id === lectureId);

  const [editedLecture, setEditedLecture] = useState(lecture);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedLecture({
      ...editedLecture,
      [name]: value,
    });
  };
  const handleSave = () => {
    // Assuming you have an API to save the edited lecture data
    fetch(`/api/lectures/${lectureId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedLecture),
    })
      .then((response) => {
        console.log(response); // Log the API response
        if (response.ok) {
          // Data was successfully saved
          navigate(`/lecture/${lectureId}`);
        } else {
          // Handle any errors or show a message to the user
          console.error('Failed to save data');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <Box sx={{ ml: 5 }}>
      <Header title="EDIT LECTURER PROFILE" />
      {lecture ? (
        <Stack direction="column">
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Lecturer ID:{" "}
            </Typography>
            <TextField
              name="id"
              value={editedLecture.id}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            />
            <Typography sx={{ width: 60, ml: 3 }} variant="h5">
              ID Card:{" "}
            </Typography>
            <TextField
              value={editedLecture.IDCard}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Full name:{" "}
            </Typography>
            <TextField
              value={editedLecture.Fullname}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              First Name:{" "}
            </Typography>
            <TextField
              value={editedLecture.FirstName}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Middle Name:{" "}
            </Typography>
            <TextField
              value={editedLecture.MiddleName}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Last Name:{" "}
            </Typography>
            <TextField
              value={editedLecture.LastName}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Date of Birth:{" "}
            </Typography>
            <TextField
              value={editedLecture.DateOfBirth}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            >
              {new Date(editedLecture.DateOfBirth).toLocaleDateString()}
            </TextField>
            <Typography sx={{ width: 60, ml: 3 }} variant="h5"> Gender: </Typography>
            <TextField
              value={editedLecture.Gender ? "Male" : "Female"}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Address:{" "}
            </Typography>
            <TextField
              value={editedLecture.Address}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Mobile Phone:{" "}
            </Typography>
            <TextField
              value={editedLecture.MobilePhone}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Email:{" "}
            </Typography>
            <TextField
              value={editedLecture.Email}
              onChange={handleChange}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5"> Active: </Typography>
                <TextField
                  value={editedLecture.IsActive ? "Yes" : "No"}
                  onChange={handleChange}
                  sx={{ ml: 1 }}
                  size="small"
                />
          </Stack>
          <Stack direction="row" sx={{ mt: 5, ml: 80 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSave}
              sx={{
                borderRadius: "20px",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#3e4396" : "#a4a9fc",
                color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
                ":hover": {
                  bgcolor: "#a4a9fc", 
                  color: "white",
                },
                mr: 2
              }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate(`/lecture/${lectureId}`)
              }}
              sx={{
                borderRadius: "20px",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#3e4396" : "#a4a9fc",
                color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
                ":hover": {
                  bgcolor: "#a4a9fc", 
                  color: "white",
                },
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Typography>Lecturer is emty</Typography>
      )}
    </Box>
  );
};

export default LectureEditProfile;
