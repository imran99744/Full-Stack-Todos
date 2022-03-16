const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
var jsonParser = bodyParser.json();
app.use(cors());

let todos = ["go to gym", "go bed", "check emails", "go to shool"];

app.get("/todo-list", (req, res) => {
  res.send(todos);
});

// app.post("/add-item", (req, res) => {
//   console.log(req.body.item);
//   todos.push(req.body.item);
//   res.status(201).send(data);
// });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
