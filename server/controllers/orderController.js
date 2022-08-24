const Order = require('../model/orderModel');

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch(error) {
    console.log(error)
  }
}

const addOrder = async (req, res) => {
  try {
    const order = await Order.create();

    res.status(200).json(order);
  } catch(error) {
    console.log(error)
  }
}

const getOrder = async (req, res) => {
 const orderId = req.params.id;

 try {
  const order = await Order.findById(orderId);

  if(!order) {
    res.status(404).json({ msg: `Order with ID: ${orderId} not found!` })
  }

  res.status(200).json(order);
 } catch(error) {
  console.log(error)
 }
}

module.exports = {
  getOrders,
  addOrder,
  getOrder
}