const { request, response } = require("express");
const express = require("express");
const app = express();

// I probably won't need that
app.use(express.json());

app.get("/solution-word", (request, response) => {
  var solution = "REDMEDICAL";
  response.send(solution);
});

app.listen(8000, () => {
  console.log("App is listening on port 8000.");
});

module.exports = app;
