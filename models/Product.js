const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
    size: {
        type: Array,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    disPrice: {
        type: Number,
        required: false,
    },
    hasWholesale: {
        type: Boolean,
        required: true,
    },
    wholeMinQuan: {
        type: Number,
        required: false,
    },
    wholePrice: {
        type: Number,
        required: false,
    },
    isFeatured: {
        type: Boolean,
        default: false,
        required: false,
    },
    storeId: {
        type: String,
        required: true,
    },
})



module.exports = mongoose.model("Product", productSchema)