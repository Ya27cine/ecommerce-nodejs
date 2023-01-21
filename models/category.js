const db = require("mongoose");

const categorySchema = db.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 47
    }
},{timestamps: true});

module.exports = new db.model("Category", categorySchema);