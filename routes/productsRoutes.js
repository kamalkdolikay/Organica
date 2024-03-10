const express = require('express');
const router = express.Router();
const { addProduct, getProducts, getProductsinfo } = require('../controllers/productsController');
const { protect } = require('../middleware/authMiddleware');

router.post('/add', protect, addProduct);
router.get('/get', getProducts);
router.post('/info', getProductsinfo);

module.exports = router