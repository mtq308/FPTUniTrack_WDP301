require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const lecturerRoutes = require('./routes/lecturerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const swaggerRoute = require('./configs/swaggerRoute');
const semesterRoutes = require('./routes/semesterRoutes');
const app = express();
const cors = require('cors');
// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// Database connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error: ' + err);
  });

// Routes
app.use('/auth', authRoutes);
app.use('/student', studentRoutes);
app.use('/lecturer', lecturerRoutes);
app.use('/admin', adminRoutes);
app.use('/', swaggerRoute);
app.use('/semester', semesterRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
