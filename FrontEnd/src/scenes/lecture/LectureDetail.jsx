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
              disabled
              label={lecture.id}
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
              disabled
              label={lecture.IDCard}
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
              disabled
              label={lecture.Fullname}
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
              disabled
              label={lecture.FirstName}
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
              disabled
              label={lecture.MiddleName}
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
              disabled
              label={lecture.LastName}
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
              disabled
              label={lecture.DateOfBirth}
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
              disabled
              label={lecture.Gender ? "Male" : "Female"}
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
              disabled
              label={lecture.Address}
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
              disabled
              label={lecture.MobilePhone}
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
              disabled
              label={lecture.Email}
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
                disabled
                label={lecture.IsActive ? "Yes" : "No"}
                InputProps={{
                    readOnly: true,
                }}
                sx={{ ml: 1 }}
                size="small"
                />
          </Stack>
          <Stack direction="row" sx={{ mt: 5, ml: 80 }}>
            <Button
              variant="outlined"
              onClick={() => {
                navigate('/lecture')
              }}
              sx={{
                bgcolor:
                  theme.palette.mode === "dark" ? colors.grey[400] : "white",
                color:
                  theme.palette.mode === "dark" ? colors.primary[100] : "black",
                mr: 3,
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
