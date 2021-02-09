import express from "express";

const app = express();

const port = process.env.port || 4005;

let runningMessage = "Testing NodeJS APP...";

app.get("/", (req, res) => {
  res.send(runningMessage);
});

const server = app.listen(port, () => {
  console.log("server now is running at port: " + port);
});

module.exports;
