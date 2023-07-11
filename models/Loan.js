const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    mobile: {
      type: String,
    },
    email: {
      type: String,
    },
    permanentAdrs: {
      type: String,
    },
    passport: {
      type: String,
    },
    amount: {
      type: Number,
    },
    nextkeen: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('loan', loanSchema);
