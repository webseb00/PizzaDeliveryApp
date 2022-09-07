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

    if(!pizza) {
      res.status(404).json({ msg: `Product with ID: ${id} not found!` })
    }

    res.status(200).json(pizza);
  } catch(error) {
    res.status(400).json({ msg: `Invalid product ID` })
  }
}

const addPizza = async (req, res) => {
  try {
    const { title, description, price, ingredients, img } = req.body

    if(!title || !description || !price || !img) {
      res.status(400).json({ msg: 'Please fill all fields correctly!' })
    }

    const pizza = await Pizza.create({
      title,
      description,
      price,
      ingredients, 
      img
    })

    res.status(200).json(pizza);
  } catch(error) {
    console.log(error);
  }
}

const updatePizza = async (req, res) => {
  try {
    const id = req.body.id;
    const pizza = await Pizza.findById(id)

    if(!pizza) {
      res.status(404).json({ msg: 'Pizza not found!' });
    }

    const response = await Pizza.findByIdAndUpdate(id, req.body, { new: true })

    res.status(200).json(response)
  } catch(err) {
    console.log(err)
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
  updatePizza,
  deletePizza
}