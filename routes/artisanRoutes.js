const router = require("express").Router();

// require models
const db = require("../models");

// update profile of artisan
router.route("/artisans/:id").put((req, res) => {
    db.Artisan.findByIdAndUpdate({_id: req.params.id})
    .then(dbArtisan => {
        res.json(dbArtisan);
    }).catch(err => {
        res.json(err);
    });
});
