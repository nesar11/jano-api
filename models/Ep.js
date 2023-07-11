const mongoose = require('mongoose');

const epSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    companyName: {
      type: String,
    },
    category: {
      type: String,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ep', epSchema);
