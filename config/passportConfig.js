const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')

/* passport.serializeUser((user, done)=>{
   done(null, user.id)
})

passport.deserializeUser((id, done)=>{
   User.findById(id).then((user)=>{
      done(null, user)
   })
}) */

passport.serializeUser((user, done) => {
   done(null, user);
 });
 
passport.deserializeUser((user, done) => {
   done(null, user);
});

passport.use(
   new GoogleStrategy({
      //Options for Google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: 'http://localhost:3001/auth/google/callback'

   }, (accessToken, refreshToken, profile, done) => {

      let User = {
         username: profile.displayName,
         googleID: profile.id
         
      }

      console.log("Passport Callback")
      console.log(profile)
      console.log(User)
      done(null, User)
      //Manage Db User info saving   
   })
)