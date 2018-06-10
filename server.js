const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan('dev'));
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// configure using our exported passport function.
// we need to pass the express app we want configured!
// order is important! you need to set up passport
// before you start using it in your routes.
require('./passport')(app);
// Add routes, both API and view
const routes = require("./routes");
app.use(routes);
// Here's a little custom error handling middleware
// that logs the error to console, then renders an
// error page describing the error.
app.use((error, req, res, next) => {
  console.error(error);
  res.json({
    error
  })
});
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/passport-examples",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


