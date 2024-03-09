const express = require('express');
const router = express.Router();
const { addProduct, getProducts } = require('../controllers/productsController');
const { protect } = require('../middleware/authMiddleware');

router.post('/add', protect, addProduct);
router.get('/get', getProducts);

module.exports = router