const express = require('express')
const router = express.Router()
const { getAllPizza, getPizza, addPizza, deletePizza } = require('../controllers/pizzaController')
const handleAuth = require('../middleware/authMiddleware')

router.get('/', getAllPizza)
router.get('/:id', getPizza)
router.post('/', handleAuth, addPizza)
router.delete('/:id', handleAuth, deletePizza)

module.exports = router;