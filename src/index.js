const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const { PORT, dbOptions } = require("./config/server");
const eventsController = require("./controllers/eventsController");

const connectWithRetry = () => {
  mongoose
    .connect("mongodb://events-backend-mongodb:27017/events", dbOptions)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => setTimeout(connectWithRetry, 1000));
};


connectWithRetry();
require("./models/events/event");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/events", eventsController);

app.listen(PORT, () =>
  console.log(`Hello world app listening on port sssssssssssssssssss ${PORT}!`)
);
