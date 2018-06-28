const router = require("express").Router();

// require models
const db = require("../models");


router.route("/api/vendoritems/all/:vendorID").get((req, res) => {
  console.log(req.params.vendorID);
  
  db.Items.find({ artisanID: req.params.vendorID })
    .then(dbItems => {
      console.log(dbItems);
      res.json(dbItems);
    })
    .catch(err => {
      res.json(err);
    });
});

router.route("/api/showallitems").get((req, res) => {
  db.Items.find()
    .then(dbItems => {
      res.json(dbItems);
    })
    .catch(err => {
      res.json(err);
    });
});

router.route("/api/vendoritems/:itemID").get((req, res) => {
  db.Items.findOne({_id:req.params.itemID})
    .then(dbItem => {
      res.json(dbItem);
    })
    .catch(err => {
      res.json(err);
    });
});

router.route("/api/vendoritems/:itemID").put((req, res) => {
  db.Items.findOneAndUpdate({_id:req.params.itemID},{
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

router.route("/api/vendoritems/addnew").post((req,res) => {
  const newItem = req.body;
  console.log(newItem)
  console.log('got here');
  db.Items.create(newItem)
    .then(() => res.json({message:'item added'}))
    .catch(err=> {
      res.json(err);
    })
})

router.route("/api/seedartisan").get((req,res) => {
  let newItem = seed.json // need to import this file
  // convert json to array
  let arrayOfArtisans =  JSON.parse(newItem);
  arrayOfArtisans.forEach(function(artisanToAdd){
  	db.Artisans.create(artisanToAdd)
	  .then(console.log(`added ${artisanToAdd.artisanName}`)
	  .catch(err => console.log(err)));
    })
  res.json({message:`add complete`});
  })

module.exports = router;

