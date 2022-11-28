const express = require("express");
const cors = require("cors");

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// call our api
const welcome = (req, res) => {
  res.send("Welcome to our favourite food site !");
};

app.get("/", welcome);

const foodHandlers = require("./foodHandlers");

app.get("/api/restos", foodHandlers.getResto);
app.get("/api/restos/:id", foodHandlers.getRestoById);

app.post("/api/restos", foodHandlers.postResto);

app.put("/api/restos/:id", foodHandlers.updateResto);

app.delete("/api/restos/:id", foodHandlers.deleteResto);

// ready to export
module.exports = app;
