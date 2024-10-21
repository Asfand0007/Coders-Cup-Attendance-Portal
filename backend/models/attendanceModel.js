const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodersCupAttendanceSchema = new Schema({
  consumerNumber: {
    type: String,
    required: true,
  },
  Team_Name: {
    type: String,
    required: true,
  },
  Leader_name: {
    type: String,
    required: true,
  },
  Leader_email: {
    type: String,
    required: true,
  },
  mem1_name: {
    type: String,
    default: "",
  },
  mem1_email: {
    type: String,
    default: "",
  },
  mem2_name: {
    type: String,
    default: "",
  },
  mem2_email: {
    type: String,
    default: "",
  },
  mem3_name: {
    type: String,
    default: "",
  },
  mem3_email: {
    type: String,
    default: "",
  },
  mem4_name: {
    type: String,
    default: "",
  },
  mem4_email: {
    type: String,
    default: "",
  },
  att_code: {
    type: String,
    required: true,
  },
  Competition: {
    type: String,
    required: true,
  },
  attendance: {
    type: Boolean,
    default: false,
  },
});

const CodersCupAttendance = mongoose.model('CodersCupAttendance', CodersCupAttendanceSchema);
module.exports = CodersCupAttendance;
