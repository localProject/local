const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/local", {
        useMongoClient: true
    }
);

const artisanSeed = [
    {
        artisanName: "Mackey's Ferry Peanuts",
        address: "30871 US-64",
        city: "Jamesville",
        phone: "888-637-6887",
        email: "",
        website: "https://www.mpfnuts.com",
        category: "Snacks",
        region: "Coastal Plains",
        county: "Martin"
    },
    {
        artisanName: "Fisherman Creations",
        address: "1175 Hwy 7-0 E Otway",
        city: "Beaufort",
        phone: "252-729-0301",
        email: "info@crabpottrees.com",
        website: "https://crabpottrees.com",
        category: "Home Decor",
        region: "Tidewater",
        county: "Carteret"
    },
    {
        artisanName: "Cheesecakes by Alex",
        address: "315 S Elm St",
        city: "Greensboro",
        phone: "336-273-0970",
        email: "alex@cheesecakesbyalex.com",
        website: "https://www.cheesecakesbyalex.com",
        category: "Desserts",
        region: "Piedmont",
        county: "Guilford"
    },
    {
        artisanName: "Mt Olive Pickle Company",
        address: "PO Box 609",
        city: "Mount Olive",
        phone: "800-672-5041",
        email: "",
        website: "https://www.mtolivepickles.com",
        category: "Snacks",
        region: "Coastal Plains",
        county: "Wayne"
    },
    {
        artisanName: "Videri Chocolate Factory",
        address: "327 W Davie St",
        city: "Raleigh",
        phone: "919-755-5053",
        email: "",
        website: "https://www.viderichocolatefactory.com",
        category: "Desserts",
        region: "Piedmont",
        county: "Wake"
    },
    {
        artisanName: "Annelore's German Bakery",
        address: "",
        city: "Morrisville",
        phone: "919-294-8040",
        email: "hello@anneloresbakery.com",
        website: "https://www.anneloresbakery.com",
        category: "Bakery",
        region: "Piedmont",
        county: "Wake"
    },
    {
        artisanName: "AC's Yummy Jerky",
        address: "1884 Old Wilkesboro Rd",
        city: "Statesville",
        phone: "704-871-1771",
        email: "",
        website: "https://www.acyummybeefjerky.com",
        category: "Snacks",
        region: "Piedmont",
        county: "Iredell"
    },
    {
        artisanName: "Joe's Beef Jerky",
        address: "122 Cashion Farm Rd",
        city: "Statesville",
        phone: "704-528-4717",
        email: "joe@joesbeefjerky.com",
        website: "https://www.joesbeefjerky.com",
        category: "Snacks",
        region: "Piedmont",
        county: "Iredell"
    },
    {
        artisanName: "Uncle Zip's Beef Jerky",
        address: "5457 Trade St",
        city: "Hope Mills",
        phone: "910-423-7329",
        email: "",
        website: "https://www.unclezipsjerky.com",
        region: "Coastal Plains",
        county: "Cumberland"
    }
];

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
