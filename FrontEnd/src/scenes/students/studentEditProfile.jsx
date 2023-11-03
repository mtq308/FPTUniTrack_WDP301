import React from "react";
import { useParams } from "react-router-dom";
import { tokens } from "../../theme";
import { studentsData } from "../../data/studentData";
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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import dayjs from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const StudentEditProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();
  // Get the studentId from the URL using useParams
  const { studentId } = useParams();
  const [specialization, setSpecialization] = React.useState("");
  // Find the student data by studentId
  const student = studentsData.find((student) => student.id === studentId);
  const dateOfBirth = dayjs(student.DateOfBirth);

  const handleChange = (event) => {
    setSpecialization(event.target.value);
  };
  console.log(typeof dateOfBirth);
  console.log(dateOfBirth);

  return (
    <Box sx={{ ml: 5 }}>
      <Header title="EDIT STUDENT PROFILE" />
      {student ? (
        <Box sx={{ mt: 5 }}>
          <Stack direction="row">
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">Student ID:</Typography>
              <TextField
                defaultValue={student.id}
                sx={{ ml: 4.5 }}
                size="small"
              />
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 10 }}>
              <Typography variant="h5">Full name:</Typography>
              <TextField
                defaultValue={student.Fullname}
                sx={{ ml: 10.7 }}
                size="small"
              />
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ mt: 3 }}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">Date of Birth:</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{ width: 201, ml: 2.9 }}
                >
                  <DatePicker
                    defaultValue={dateOfBirth}
                    slotProps={{ textField: { size: "small" } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 10 }}>
              <Typography variant="h5">Gender:</Typography>
              {/* <TextField
                defaultValue={student.Gender ? "Male" : "Female"}
                sx={{ ml: 12.8, width: 80 }}
                size="small"
              /> */}
              <FormControl sx={{ ml: 9.9 }}>
                <Stack direction="row">
                  <RadioGroup
                    defaultValue={student.Gender ? "male" : "female"}
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
          </Stack>
          <Stack direction="row" sx={{ mt: 3 }}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">ID Card:</Typography>
              <TextField
                defaultValue={student.IDCard}
                sx={{ ml: 7.1 }}
                size="small"
              />
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 10 }}>
              <Typography variant="h5">Phone:</Typography>
              <TextField
                defaultValue={student.Phone}
                sx={{ ml: 13.7 }}
                size="small"
              />
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ mt: 3 }}>
            <Typography variant="h5">Address:</Typography>
            <TextField
              defaultValue={student.Address}
              sx={{ ml: 6.7, width: 644 }}
              size="small"
            />
          </Stack>
          <Stack direction="row" sx={{ mt: 3 }}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">Email:</Typography>
              <TextField
                defaultValue={student.Email}
                type="email"
                sx={{ ml: 9, width: 250 }}
                size="small"
              />
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 4 }}>
              <Typography variant="h5">Student username:</Typography>
              <TextField
                defaultValue={student.StudentUsername}
                sx={{ ml: 3 }}
                size="small"
              />
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ mt: 3 }}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">Specialization:</Typography>
              <FormControl sx={{ ml: 1.7, width: 70 }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={student.Specialization}
                  size="small"
                  onChange={handleChange}
                >
                  <MenuItem value="SE">SE</MenuItem>
                  <MenuItem value="IA">IA</MenuItem>
                  <MenuItem value="GD">GD</MenuItem>
                  <MenuItem value="AI">AI</MenuItem>
                  <MenuItem value="IB">IB</MenuItem>
                  <MenuItem value="IS">IS</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 26.4 }}>
              <Typography variant="h5">Is active:</Typography>
              <FormControl sx={{ ml: 9.2 }}>
                <Stack direction="row">
                  <RadioGroup
                    defaultValue={student.IsActive ? "Yes" : "No"}
                    name="radio-buttons-group"
                    sx={{ ml: 3 }}
                  >
                    <Stack direction="row">
                      <FormControlLabel
                        value="No"
                        control={
                          <Radio
                            sx={{
                              "&, &.Mui-checked": {
                                color: "silver",
                              },
                            }}
                          />
                        }
                        label="No"
                      />
                      <FormControlLabel
                        value="Yes"
                        control={
                          <Radio
                            sx={{
                              "&, &.Mui-checked": {
                                color: "silver",
                              },
                            }}
                          />
                        }
                        label="Yes"
                      />
                    </Stack>
                  </RadioGroup>
                </Stack>
              </FormControl>
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
              Save
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

export default StudentEditProfile;
