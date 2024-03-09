const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
{
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    price: {
        type: String,
        required: [true, 'Please add a price'],
    },
    status: {
        type: String,
        required: [true, 'Please add a status'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('Products', productSchema)