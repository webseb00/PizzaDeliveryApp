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
    const { firstName, lastName, address  } = req.body;

    if(!firstName || !lastName || !address) {
      res.status(400).json({ msg: 'Please fill all fields!' })
      return;
    }

    const order = await Order.create(req.body);

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
  res.status(400).json({ msg: 'Your order ID is invalid' })
 }
}

const updateOrderStatus = async (req, res) => {
  const orderId = req.params.id;
  const status = req.body.status;
  
  try {
   const order = await Order.findById(orderId);
   
   if(!order) {
     res.status(404).json({ msg: `Order with ID: ${orderId} not found!` })
   }

   const updatedOrder = await order.updateOne({ status })
 
   res.status(200).json(updatedOrder);
  } catch(error) {
   console.log(error)
  }
 }

const deleteOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    const findOrder = await Order.findById(orderId)

    if(!findOrder) {
      res.status(404).json({ msg: `ORder with ID: ${orderId} not found!` })
    }

    const order = await findOrder.remove()
    res.status(200).json(order)
  } catch(err) {  
    console.log(err)
  }
}

module.exports = {
  getOrders,
  addOrder,
  getOrder,
  updateOrderStatus,
  deleteOrder
}