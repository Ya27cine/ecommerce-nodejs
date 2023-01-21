const db = require("mongoose");
const {ObjectId} = db.Schema;

const productSchema = db.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 47
    },
    description:{
        type: String,
        required: true,
        trim: true,
        maxLength: 700
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number
    },
    photo: {
        type: Buffer,
        contentType: String
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true,
    },
    shipping: {
        required: false,
        type: Boolean,
        default: false
    }
},{timestamps: true});

module.exports = new db.model("Product", productSchema);