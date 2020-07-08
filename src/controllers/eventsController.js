const express = require("express");
const router = express.Router();

const eventsRepository = require("../services/events/eventsRepository");
const utils = require("../services/events/utils");

router.get("/", function (req, res) {
  eventsRepository
    .getEvents(res)
});

router.post("/", function (req, res) {
  eventsRepository
    .createEvent(req, res)
});

module.exports = router;
