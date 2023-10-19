import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { studentsData } from "../../data/studentData";

const Students = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Roll Number", flex: 0.5 },
    {
      field: "LastName",
      headerName: "Last Name",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "MiddleName",
      headerName: "Middle Name",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "FirstName",
      headerName: "First Name",
      flex: 0.5,
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
      field: "MobilePhone",
      headerName: "Tel",
      flex: 1,
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "ChuyenNganh",
      headerName: "Chuyen Nganh",
      flex: 0.5,
    },
  ];

  return (
    <Box m="20px">
      <Header title="STUDENTS" subtitle="List of students" />
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
        />
      </Box>
    </Box>
  );
};

export default Students;
