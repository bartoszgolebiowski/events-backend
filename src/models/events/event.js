const mongoose = require("mongoose");
const Yup = require("yup");

const EventSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  },
});

const YupSchema = Yup.object().shape({
  id: Yup.string().required(),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Email is not fitting formula")
    .required("Email is required"),
  date: Yup.date()
    .nullable()
    .required("Date is requried")
    .min(new Date(), "Date must be at least today"),
});

EventSchema.pre("validate", function (next) {
  return YupSchema.validate(this, { abortEarly: false })
    .then(() => res())
    .catch((err) => {
      next(err.errors);
    });
});

module.exports = Item = mongoose.model("event", EventSchema);
