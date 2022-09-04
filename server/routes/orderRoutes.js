const express = require('express');
const router = express.Router();
const { getOrders, addOrder, getOrder, updateOrderStatus, deleteOrder } = require('../controllers/orderController')
const handleAuth = require('../middleware/authMiddleware')

router.post('/', addOrder);
router.get('/', handleAuth, getOrders);
router.get('/:id', getOrder);
router.put('/:id', handleAuth, updateOrderStatus)
router.delete('/:id', deleteOrder)

module.exports = router;