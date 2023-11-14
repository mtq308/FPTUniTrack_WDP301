import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useTheme,
  Typography,
  Paper,
  Grid,
  Box,
  TextField,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";

const SubjectDetail = () => {
  //Get user role & token to fetch data
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  //URL require lowercase text for user role
  //example: localhost:3456/admin/... not localhost:3456/Admin/...
  //so we need to transfer the role variable to lowercase text!
  const roleParams = role.toLowerCase();

  const [subject, setSubject] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const { subjectId } = useParams();

  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubjectDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3456/${roleParams}/subjectDetail/${subjectId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setSubject(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching subject:", error);
        // Handle error as needed
      }
    };

    fetchSubjectDetail();
  }, [subjectId, token]);

  return (
    <Box sx={{ ml: 5 }}>
      <Header title="SUBJECT DETAIL" />
      {subject ? (
        <Box sx={{ mt: 5 }}>
          <Stack direction="row">
            <Stack direction="row" alignItems="center">
              <Typography variant="h5">Subject ID:</Typography>
              <TextField
                defaultValue={subject[0].SubjectID}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 4.5 }}
                size="small"
              />
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ ml: 10 }}>
              <Typography variant="h5">Subject Code</Typography>
              <TextField
                defaultValue={subject[0].SubjectCode}
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
              <Typography variant="h5">Syllabus Name</Typography>
              <TextField
                defaultValue={subject[0].SyllabusName}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 2.9 }}
                size="small"
              />
            </Stack>
          </Stack>
          <Box sx={{ mt: 5 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate(`/subject/${subjectId}/edit`);
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
              Edit subject
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
              onClick={() => {
                navigate(`/subject`);
              }}
            >
              Cancel/Go back
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
            // onClick={handleDeleteDialogOpen}
            >
              Delete
            </Button>
          </Box>
          {/* Delete Confirmation Dialog */}
          {/* <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure you want to delete this student?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteDialogClose}>Cancel</Button>
              <Button onClick={handleDeleteConfirmed} color="error">
                Delete
              </Button>
            </DialogActions>
          </Dialog> */}
        </Box>
      ) : (
        <Typography variant="body1">Subject not found</Typography>
      )}
    </Box>
  )
}

export default SubjectDetail;