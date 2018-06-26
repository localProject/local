const router = require("express").Router();

// require models
const db = require("../models");


router.route("/vendoritems/all/:vendorID").get((req, res) => {
  db.Items.find({ artisanID: req.params.vendorID })
    .then(dbItems => {
      res.json(dbItems);
    })
    .catch(err => {
      res.json(err);
    });
});

router.route("/vendoritems/:itemID").get((req, res) => {
  db.Items.findOne({_id:req.params.itemID})
    .then(dbItem => {
      res.json(dbItem);
    })
    .catch(err => {
      res.json(err);
    });
});

router.route("/vendoritems/:itemID").put((req, res) => {
  db.Items.findOneAndUpdate({_id:req.body._id},{
    itemName:req.body.itemName,
    img:req.body.img,
    price:req.body.price,
    category:req.body.category
  })
    .then(dbItem => {
      res.json(dbItem);
    })
    .catch(err => {
      res.json(err);
    });
});

router.route("/vendoritems/addnew/:vendorID").post((req,res) => {
  const newItem = new Items(req.body);
  newItem.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newItem);
  })
})


module.exports = router;
