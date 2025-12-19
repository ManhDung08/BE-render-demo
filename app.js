const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const cors = require("cors");

app.use(cors());
//middleware
app.use(express.json());

const userRouter = require("./routes/UserRoutes");
app.use("/api", userRouter);

const queryString =
  process.env.MONGODB_URI ||
  "mongodb+srv://dung08122003:dung.tm0812@cluster0.cjqbu.mongodb.net/SimpleCRUDBackend?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3001;

mongoose
  .connect(queryString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

module.exports = app;
