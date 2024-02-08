require("dotenv").config();
const express = require("express");
const { port } = require("./config");
const router = require("./router");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log("Server running on port : ", port);
});
