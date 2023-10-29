import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Contact is required"),
  address1: yup.string().required("Address is required"),
  address2: yup.string().required("Address is required"),
});
const SemesterDetail = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };


  const params = useParams().semesterId;
  let semesterData = null;
  //database lookup using id
  // if (params === '1') {
  //   semesterData = {
  //     Name: 'Fall2023',
  //     StartDate: "23/09/2023",
  //     EndDate: "24/10/2023"
  //   }
  // }
  semesterData = {
    Name: 'Fall2023',
    StartDate: "23/09/2023",
    EndDate: "24/10/2023"
  }
  const [Name, setName] = useState(semesterData.Name);

  return (
    <Box m="20px">
      <Header title="SEMESTER DETAIL" subtitle="FPTUniTrackSemester" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              m="40px 0 0 0"
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={params.id}
                onBlur={handleBlur}
                // onChange={(e) => setName(e.target.value)} 
                value={params}
                name="semesterId"
                // error={!!touched.firstName && !!errors.firstName}
                // helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={semesterData.Name}
                onBlur={handleBlur}
                onChange={(e) => setName(e.target.value)}
                value={Name}
                name="Name"
                // error={!!touched.lastName && !!errors.lastName}
                // helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={semesterData.StartDate}
                onBlur={handleBlur}
                onChange={handleChange}
                value={semesterData.StartDate}
                name="StartDate"
                // error={!!touched.email && !!errors.email}
                // helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={semesterData.EndDate}
                onBlur={handleBlur}
                onChange={handleChange}
                value={semesterData.EndDate}
                name="EndDate"
                // error={!!touched.contact && !!errors.contact}
                // helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />

            </Box>
            <Box display="flex" justifyContent="end" mt="20px" gap="10px">
              <Button type="submit" color="secondary" variant="contained">
                Update Semester
              </Button>
              <Button type="" color="redAccent" variant="contained">
                Delete Semester
              </Button>

            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SemesterDetail;

// import { useParams } from "react-router-dom";

// const SemesterDetail = () => {
//   const { semesterId } = useParams();

//   // Fetch semester data based on semesterId from your data source
//   // You can use this semester data to display the information on the page

//   return (
//     <div>
//       <h2>semester Details</h2>
//       <p>semester ID: {semesterId}</p>
//       {/* Display other student information here */}
//     </div>
//   );
// }

// export default SemesterDetail;
