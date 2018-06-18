const mongoose = require("mongoose");

// schema constructor
const Schema = mongoose.Schema;

// artisan schema
const ArtisanSchema = new Schema({

    id: {
        type: String,
        trim: true
    },

    artisanName: {
        type: String,
        trim: true
    },

    address: {
        type: String,
        trim: true
    },

    city: {
        type: String,
        trim: true
    },

    phone: {
        type: String,
        trim: true
    },
    
    email: {
        type: String,
        trim: true
    },

    website: {
        type: String,
        trim: true
    }, 

    category: {
        type: String,
        trim: true
    },

    region: {
        type: String,
        trim: true
    },

    county: {
        type: String,
        trim: true
    },

    about: {
        type: String,
        trim: true
    }

    // items: [{
    //     type: Schema.Types.ObjectID,
    //     ref: "Items"
    // }]
});

const Artisan = mongoose.model("Artisan", ArtisanSchema);

module.exports = Artisan;