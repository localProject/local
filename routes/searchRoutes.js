const router = require("express").Router();

// require models
const db = require("../models");

// display all artisans
router.route("/artisans").get((req, res) => {
    db.Artisan.find({})
    .then(dbArtisan => {
        res.json(dbArtisan);
    }).catch(err => {
        res.json(err);
    });
});

// display artisans by search
// define searchBy (will be done in component)
// set based on whatever it is that is being searched by
router.route("/artisans/category/:search").get((req, res) => {
    db.Artisan.find({category: req.params.search})
    .then(dbArtisan => {
        res.json(dbArtisan);
    }).catch(err => {
        res.json(err);
    });
});

router.route("/artisans/region/:search").get((req, res) => {
    db.Artisan.find({region: req.params.search})
    .then(dbArtisan => {
        res.json(dbArtisan);
    }).catch(err => {
        res.json(err);
    });
});

router.route("/artisans/county/:search").get((req, res) => {
    db.Artisan.find({county: req.params.search})
    .then(dbArtisan => {
        res.json(dbArtisan);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;