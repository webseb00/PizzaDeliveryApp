const mongoose = require('mongoose')

const pizzaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Names must be unique!'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Please provide pizza description!']
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: [Number],
    required: true
  },
  ingredients: {
    type: [String]
  },
  extraOptions: {
    type: [
      {
        text: { type: String, required: true },
        price: { type: Number, requred: true }
      }
    ]
  }},
  {timestamps: true}
)

const pizzaModel = mongoose.model('Pizza', pizzaSchema)

module.exports = pizzaModel;