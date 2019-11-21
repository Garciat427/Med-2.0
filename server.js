const express = require("express");

//Auth Dependencies
//const passportSetup = require('./config/passportConfig');
const passport = require('passport');
const passportSetup = require('./config/passportConfig')
const keys = require('./config/keys');
const cookieSession = require('cookie-session')


const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

/* ------- Auth Init ------- */

//Setup Cookies
app.use(cookieSession({
  maxAge: 24*60*60*1000, //day in milliseconds
  keys:[keys.session.cookieKey]
}))

//Init passport
app.use(passport.initialize())
app.use(passport.session())

// Add routes, both API, view, and Auth Routes
app.use(routes);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

  });
});