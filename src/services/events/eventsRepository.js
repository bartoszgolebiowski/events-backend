const Event = require("../../models/events/event");
const utils = require("./utils");

const createEvent = function (req, res) {
  const event = new Event(req.body);

  event
    .save()
    .then((res) => res.json(res))
    .catch((err) => {
      if (Object.keys(err).length === 0) return res.json(event);
      res.status(409).json(utils.parseErrors(err));
    });
};
const getEvents = function (res) {
  Event.find({}, (err, events) => {
    if (err != null) res.status(500);
    res.json(events);
  });
};

exports.createEvent = createEvent;
exports.getEvents = getEvents;
