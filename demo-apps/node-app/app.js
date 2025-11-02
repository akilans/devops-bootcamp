const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || "123";
const API_URL = process.env.API_URL || "http://localhost:3000/";

// root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// employees endpoint
app.get("/employees", (req, res) => {
  console.log("API_KEY:", API_KEY);
  fetch(`${API_URL}/`, {
    method: "GET",
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((response) => {
      console.log(response.status);
      if (response.status === 401) {
        res.status(401).send("Unauthorized: Invalid API Key");
      } else {
        return response.json();
      }
    })
    .then((data) => res.json(data))
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      res.status(500).send("Error fetching employee data");
    });
});

// health check endpoint
app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
