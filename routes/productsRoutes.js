const express = require('express');
const router = express.Router();
const { addProduct } = require('../controllers/productsController');
const { protect } = require('../middleware/authMiddleware');

router.post('/add', protect, addProduct);

module.exports = router