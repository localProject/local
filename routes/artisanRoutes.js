const router = require("express").Router();

// require models
const db = require("../models");

// update profile of artisan
router.route("/artisans/:id").put((req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    db.Artisan.findByIdAndUpdate({_id: req.params.id}, req.body.updatedInfo)
    .then(dbArtisan => {
        res.json(dbArtisan);
    }).catch(err => {
        res.json(err);
    });
});


module.exports = router;