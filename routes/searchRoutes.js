const router = require("express").Router();

// require models
const db = require("../models");

// display all artisans
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