const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const questionsRouter = require("./routes/questionsRouter");
const port = process.env.PORT;
const api_URL = process.env.API_URL;

app.use(cors());
app.use(express.static("public"));

app.use("/trivia", questionsRouter);

app.get("/", (req, res) => {
  res.send("Get on server");
});

app.post("/", (req, res) => {
  res.send("Post on server");
});

app.listen(5050, () => {
  console.log("Connected on 5050");
});
