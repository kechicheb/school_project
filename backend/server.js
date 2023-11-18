require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const teacherRoutes = require("./routes/teacher");
const studentRoutes = require("./routes/student");
const adminRoutes = require("./routes/admin");

// express app
const app = express();
const router = express.Router();
// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes


app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/teacher", teacherRoutes);

// connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    // listen to port
    app.listen(process.env.PORT, () =>
      console.log(`connected to db AND listening on port`, process.env.PORT)
    );
  })
  .catch((err) => console.log(err));
