import React, { useEffect, useState } from "react";
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
import axios from "axios";

const LectureEditProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const { lecturerId } = useParams();
  const [lecturer, setLecturer] = useState({});
  
  useEffect(() => {
    const fetchLectureDetail = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3456/admin/lecturer/profile/${lecturerId}`,
          {
            role: "Admin",
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setLecturer(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching lecturer details:", error);
        // Handle error as needed
      }
    };
    fetchLectureDetail();
  }, [lecturerId, token]);

  const handleDateChange = (newDate) => {
    // Handle the date change, e.g., update the state or perform any necessary logic
    console.log("New Date:", newDate);
  };

  return (
    <Box sx={{ ml: 5 }}>
      <Header title="EDIT LECTURER PROFILE" />
      {lecturer && lecturer.length > 0 ? (
        <Stack direction="column">
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Lecturer ID:{" "}
            </Typography>
            <TextField
              name="id"
              disabled
              value={lecturer[0].id}
              sx={{ ml: 1 }}
              size="small"
            />
            <Typography sx={{ width: 60, ml: 3 }} variant="h5">
              ID Card:{" "}
            </Typography>
            <TextField
              disabled
              value={lecturer[0].IDCard}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Username:{" "}
            </Typography>
            <TextField
              defaultValue={lecturer[0].LectureUserName}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Full name:{" "}
            </Typography>
            <TextField
              defaultValue={lecturer[0].Fullname}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Date of Birth:{" "}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ ml: 1 }}
                defaultValue={dayjs(lecturer[0].DateOfBirth)}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField {...params}  size="small" />
                )}
              />
            </LocalizationProvider>
            <Typography sx={{ width: 60, ml: 3 }} variant="h5">
              {" "}
              Gender:{" "}
            </Typography>
            <TextField
              defaultValue={lecturer[0].Gender ? "Male" : "Female"}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Address:{" "}
            </Typography>
            <TextField
              defaultValue={lecturer[0].Address}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Phone:{" "}
            </Typography>
            <TextField
              type="number"
              defaultValue={lecturer[0].Phone}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Email:{" "}
            </Typography>
            <TextField
              defaultValue={lecturer[0].Email}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              {" "}
              Active:{" "}
            </Typography>
            <TextField
              defaultValue={lecturer[0].IsActive ? "Yes" : "No"}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack direction="row" sx={{ mt: 5, ml: 80 }}>
            <Button
              variant="contained"
              size="large"
              // onClick={handleSave}
              sx={{
                borderRadius: "20px",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#3e4396" : "#a4a9fc",
                color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
                ":hover": {
                  bgcolor: "#a4a9fc",
                  color: "white",
                },
                mr: 2,
              }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate(`/lecture/${lecturerId}`);
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
