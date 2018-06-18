const mongoose = require("mongoose");
const db = require("../models");
const artisanSeed = require("../seeds.json");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/local", {
        useMongoClient: true
    }
);

db.Artisan
    .remove({})
    .then(() => db.Artisan.collection.insertMany(artisanSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    }).catch(err => {
        console.error(err);
        process.exit(1)
    });
