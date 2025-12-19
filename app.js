const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

app.use(cors());
//middleware
app.use(express.json());

const userRouter = require("./routes/UserRoutes");
app.use("/api", userRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;

const mongoose = require("mongoose");
dotenv.config();
const queryString =
  process.env.MONGODB_URI ||
  "mongodb+srv://dung08122003:dung.tm0812@cluster0.cjqbu.mongodb.net/SimpleCRUDBackend?retryWrites=true&w=majority";

//configure mongoose
mongoose
  .connect(queryString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("MongoDB connection error:", err.message));
