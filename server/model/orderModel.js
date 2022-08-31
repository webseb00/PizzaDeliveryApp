const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 30
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 30
  },
  address: {
    type: String,
    required: true
  },
  details: {
    type: [
      {
        title: { type: String, required: true },
        extras: { type: [String], required: true }
      }
    ]
  },
  total: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    default: 0
  },
  method: {
    type: Number,
    required: true
  }
  },
  { timestamps: true }
);

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;