const Pizza = require('../model/pizzaModel')

const getAllPizza = async (req, res) => {
  try {
    const pizza = await Pizza.find();

    res.status(200).json(pizza);
  } catch(error) {
    console.log(error)
  }
}

const getPizza = async (req, res) => {
  try {
    const id = req.params.id;
    const pizza = await Pizza.findById(id);

    res.status(200).json(pizza);
  } catch(error) {
    console.log(error)
  }
}

const addPizza = async (req, res) => {
  try {
    const pizza = await Pizza.create(req.body)

    res.status(200).json(pizza);
  } catch(error) {
    console.log(error);
  }
}

const deletePizza = async (req, res) => {
  try {
    const id = req.params.id;
    const pizza = await Pizza.findById(id);

    if(!pizza) {
      res.status(404).json({ msg: 'Pizza not found!' });
    }

    await pizza.remove();
    res.status(200).json({ id: pizza._id })

  } catch(error) {
    console.log(error)
  }
}

module.exports = {
  getAllPizza,
  getPizza,
  addPizza,
  deletePizza
}