const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/form-submission");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/", userRoutes);
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
