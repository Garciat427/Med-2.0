//Router Dependency
const router = require("express").Router();
const passport = require('passport');

//Route Depencendies

//Auth logout
router.get('/logout', (req, res) => {
   //Handle with passport
   req.logout();
   // res.redirect('/') (Handle on react)
})

//Auth with Google
router.get(
   '/google', 
   passport.authenticate('google', 
   { scope: ['profile'] })
)

//Callback route for google
router.get('/google/callback/',
   passport.authenticate('google'), 
   (req, res) => {
      console.log("Redirect")
      var name = req.user.name;
      res.redirect("http://localhost:3000?name=" + name);
   }
)

module.exports = router;
