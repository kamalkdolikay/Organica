const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
{
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
    },
    current: {
        type: Number,
        // required: [true, 'Please add a status'],
    },
    min: {
        type: Number,
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