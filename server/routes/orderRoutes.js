const express = require('express');
const router = express.Router();
const { getOrders, addOrder, getOrder } = require('../controllers/orderController')
const handleAuth = require('../middleware/authMiddleware')

router.post('/', addOrder);
router.get('/', handleAuth, getOrders);
router.get('/:id', handleAuth, getOrder);

module.exports = router;