
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
        minlength:[2, "The price must be more than 2 characters"]

    }
}, {timestamps:true});
module.exports = mongoose.model('Product', ProductSchema);










