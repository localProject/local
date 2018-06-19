const router = require("express").Router();

// require models
const db = require("../models");

router.route("/artisans")
    .get((req, res) => {
        db.Artisan.find({})
        .then(dbArtisan => {
        res.json(dbArtisan);
        }).catch(err => {
            res.json(err);
        });
    });

    module.exports = router;

// module.exports = app => {
//     // get artisan info from db
//     // will be populated by search parameters
//     app.get("/artisans", (req, res) => {
//         db.Artisan.find({})
//         .then(dbArtisan => {
//         res.json(dbArtisan);
//         }).catch(err => {
//             res.json(err);
//         });
//     }
// )};