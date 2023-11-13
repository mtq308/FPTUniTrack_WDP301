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
import React from "react";
import Header from "../../components/Header";

const LectureDetail = () => {
  const { lectureId } = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const lecture = lecturersData.find((lecture) => lecture.id === lectureId);

  return (
    <Box sx={{ ml: 5 }}>
      <Header title="LECTURER DETAILS" />
      {lecture ? (
        <Stack direction="column">
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Lecturer ID:{" "}
            </Typography>
            <TextField
              value={lecture.id}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            />
            <Typography sx={{ width: 60, ml: 3 }} variant="h5">
              ID Card:{" "}
            </Typography>
            <TextField
              value={lecture.IDCard}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Full name:{" "}
            </Typography>
            <TextField
              value={lecture.Fullname}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              First Name:{" "}
            </Typography>
            <TextField
              value={lecture.FirstName}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Middle Name:{" "}
            </Typography>
            <TextField
              value={lecture.MiddleName}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Last Name:{" "}
            </Typography>
            <TextField
              value={lecture.LastName}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Date of Birth:{" "}
            </Typography>
            <TextField
              value={lecture.DateOfBirth}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            >
              {new Date(lecture.DateOfBirth).toLocaleDateString()}
            </TextField>
            <Typography sx={{ width: 60, ml: 3 }} variant="h5"> Gender: </Typography>
            <TextField
              value={lecture.Gender ? "Male" : "Female"}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Address:{" "}
            </Typography>
            <TextField
              value={lecture.Address}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Mobile Phone:{" "}
            </Typography>
            <TextField
              value={lecture.MobilePhone}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5">
              Email:{" "}
            </Typography>
            <TextField
              value={lecture.Email}
              InputProps={{
                readOnly: true,
              }}
              sx={{ ml: 1 }}
              size="small"
            />
          </Stack>
          <Stack sx={{ mt: 1 }} direction="row" alignItems="center">
            <Typography sx={{ width: 100 }} variant="h5"> Active: </Typography>
                <TextField
                  value={lecture.IsActive ? "Yes" : "No"}
                InputProps={{
                    readOnly: true,
                }}
                sx={{ ml: 1 }}
                size="small"
                />
          </Stack>
          <Stack direction="row" sx={{ mt: 5, ml: 80 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate(`/lecture/${lectureId}/edit`);
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
                mr: 2
              }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate('/lecture')
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
              Back
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Typography>Lecturer is emty</Typography>
      )}
    </Box>
  );
};

export default LectureDetail;
