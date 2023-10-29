import { Box, useTheme, Button, Stack } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import Modal from '@mui/material/Modal';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Header from "../../components/Header";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const Semester = () => {
  const [semesterData, setSemesterData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/Semester.json');

        // Use the relative path to the JSON file
        if (response.ok) {
          const data = await response.json();
          setSemesterData(data);
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
    { field: "ID", headerName: "ID" },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <Link to={`/semester/${params.row.ID}`}>{params.row.Name}</Link>
      ),
    },
    {
      field: "StartDate",
      headerName: "Start Date",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "EndDate",
      headerName: "End Date",
      flex: 1,
    },

  ];


  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Semester" />
      <Button variant="contained" onClick={handleOpenModal}>
        Add Semester
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="add-semester-modal"
        aria-describedby="add-semester-form"
      >
        <Box sx={style}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseModal}
            sx={{ marginLeft: "90%" }}
          >
            <CloseIcon />
          </IconButton>
          <TextField
            label="Semester Name"
            variant="outlined"
            margin="normal"
            fullWidth

          />
          <div style={rowStyle}>
            <TextField
              label="Start Date"
              variant="outlined"
              margin="normal"
              style={{ flex: 1, marginRight: '8px' }}

            />
            <TextField
              label="End Date"
              variant="outlined"
              margin="normal"
              style={{ flex: 1 }}

            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={""} type="submit" style={{ marginTop: '10px', padding: '10px' }}>
              Add the semester
            </Button>
          </div>
        </Box>
      </Modal>
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
        <DataGrid getRowId={(row) => row.ID} rows={semesterData} columns={columns} />
      </Box>

    </Box>
  );
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between', // To space the elements evenly in a row
};
export default Semester;