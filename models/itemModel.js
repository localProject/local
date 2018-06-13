const mongoose = require("mongoose");

// schema constructor
const Schema = mongoose.Schema;

// item schema
const ItemSchema = new Schema({

    name: {
        type: String,
        trim: true
    },

    img: {
        type: String,
        trim: true
    },

    price: {
        type: Number,
        trim: true
    },

    category: {
        type: String,
        trim: true
    }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;