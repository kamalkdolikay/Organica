const asyncHandler = require('express-async-handler');
const Products = require('../models/productsModel.js');

const addProduct = asyncHandler(async (req, res) => {
    const { name, price, status, description } = req.body

    if(!name || !price || !status || !description) {
        res.status(400)
        res.json({ success: false, message: 'Please add all fields' });
    }

    const product = await Products.create({
        name:name,
        price:price,
        status:status,
        description:description,
        user: req.user.id
    })

    res.status(200).json(product)
})

module.exports = {
    addProduct,
}