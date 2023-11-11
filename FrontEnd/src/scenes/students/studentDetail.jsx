import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { tokens } from "../../theme";
import {
  useTheme,
  Typography,
  Paper,
  Grid,
  Box,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";

const StudentDetail = () => {
  
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const navigate = useNavigate();
  const [student, setStudent] = useState("");
  const { studentId } = useParams();
  console.log(studentId);
  
  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3456/admin/student/profile/${studentId}`,
          {
            role: "Admin",
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setStudent(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching student:", error);
        // Handle error as needed
      }
    };

    fetchStudentProfile();
  }, [studentId, token]);

  return (
    <Box sx={{ ml: 5 }}>
      <Header title="STUDENT DETAIL" />
      {student ? (
        <Box sx={{ mt: 5 }}>
          <Stack direction="row">
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">Student ID:</Typography>
              <TextField
                defaultValue={student[0].id}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 4.5 }}
                size="small"
              />
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 10 }}>
              <Typography variant="h5">Full name:</Typography>
              <TextField
                defaultValue={student[0].Fullname}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 10.7 }}
                size="small"
              />
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ mt: 3 }}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">Date of Birth:</Typography>
              <TextField
                defaultValue={student[0].DateOfBirth}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 2.9 }}
                size="small"
              />
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 10 }}>
              <Typography variant="h5">Gender:</Typography>
              <TextField
                defaultValue={student[0].Gender ? "Male" : "Female"}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 12.8, width: 80 }}
                size="small"
              />
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ mt: 3 }}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">ID Card:</Typography>
              <TextField
                defaultValue={student[0].IDCard}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 7.1 }}
                size="small"
              />
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 10 }}>
              <Typography variant="h5">Phone:</Typography>
              <TextField
                defaultValue={student[0].Phone}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 13.7 }}
                size="small"
              />
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ mt: 3 }}>
            <Typography variant="h5">Address:</Typography>
            <TextField
              defaultValue={student[0].Address}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 6.7, width: 644 }}
              size="small"
            />
          </Stack>
          <Stack direction="row" sx={{ mt: 3 }}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">Email:</Typography>
              <TextField
                defaultValue={student[0].Email}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 9, width: 250 }}
                size="small"
              />
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 4 }}>
              <Typography variant="h5">Student username:</Typography>
              <TextField
                defaultValue={student[0].StudentUsername}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 3 }}
                size="small"
              />
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ mt: 3 }}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">Specialization:</Typography>
              <TextField
                defaultValue={student[0].Specialization}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 1.7, width: 50 }}
                size="small"
              />
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 28.9 }}>
              <Typography variant="h5">Is active:</Typography>
              <TextField
                defaultValue={student[0].IsActive ? "Yes" : "No"}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 12.1, width: 50 }}
                size="small"
              />
            </Stack>
          </Stack>
          <Box sx={{ mt: 5 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate(`/students/${studentId}/edit`);
              }}
              sx={{
                borderRadius: "20px",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#3e4396" : "#a4a9fc",
                color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
                ":hover": {
                  bgcolor: "#a4a9fc", // theme.palette.primary.main
                  color: "white",
                },
              }}
            >
              Edit student profile
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                ml: 3,
                borderRadius: "20px",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#3e4396" : "#a4a9fc",
                color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
                ":hover": {
                  bgcolor: "#a4a9fc", // theme.palette.primary.main
                  color: "white",
                },
              }}
            >
              Cancel/Go back
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography variant="body1">Student not found</Typography>
      )}
    </Box>
  );
};

export default StudentDetail;
