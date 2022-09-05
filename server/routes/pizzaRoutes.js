const express = require('express')
const router = express.Router()
const { getAllPizza, getPizza, addPizza, updatePizza, deletePizza } = require('../controllers/pizzaController')
const handleAuth = require('../middleware/authMiddleware')

router.get('/', getAllPizza)
router.get('/:id', getPizza)
router.post('/', handleAuth, addPizza)
router.put('/', handleAuth, updatePizza)
router.delete('/:id', handleAuth, deletePizza)

module.exports = router;