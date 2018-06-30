const router = require("express").Router();
// const aws = require('aws-sdk'); 
// const multer = require('multer');
// const multerS3 = require('multer-s3'); 
// require("dotenv").config();
// s3 = new aws.S3();

// aws.config.update({
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     region: 'us-east-2'
// });


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
    itemName:req.body.itemInformation.itemName,
    img:req.body.itemInformation.img,
    price:req.body.itemInformation.price,
    category:req.body.itemInformation.category
  })
    .then(dbItem => {
      console.log(dbItem);
      console.log("test")
      res.json(dbItem);
    })
    .catch(err => {
      res.json(err);
    });
});

router.route("/api/vendoritems/addnew").post((req,res) => {
  const newItem = req.body;
  db.Items.create(newItem.itemInformation)
    .then(() => res.json({message:'item added'}))
    .catch(err=> {
      res.json(err);
    })
})

// router.route("/api/upload").post((req,res) => {
//   console.log('got upload post');
//   var upload = multer({
//     storage: multerS3({
//       s3: s3,
//       ACL:'public-read',
//       bucket: 'gbkherokubucket',
//       key: function (req, file, cb) {
//         console.log(file);
//         cb(null, file.originalname); //use Date.now() for unique file keys
//       }
//     })
//   });
//   console.log(req.body);
//   upload.array(req.body.upl,1);
//   res.json({message:"uploaded"})
// })
  
module.exports = router;

