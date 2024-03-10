const asyncHandler = require('express-async-handler');
const Products = require('../models/productsModel.js');

const addProduct = asyncHandler(async (req, res) => {
    const { name, price, min, image, current} = req.body

    if(!name || !price || !min) {
        res.status(400)
        res.json({ success: false, message: 'Please add all fields' });
    }

    const product = await Products.create({
        name:name,
        price:price,
        current: current,
        min:min,
        image:image,
        user: req.user.id
    })

    res.status(200).json(product)
});

const getProducts = asyncHandler(async (req, res) => {
    const products = await Products.find({});
    res.status(200).json(products);
})

module.exports = {
    addProduct,
    getProducts,
}