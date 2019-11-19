const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../mongoModels/userModels')

/* passport.serializeUser((user, done) => {
   done(null, user.id)
})

passport.deserializeUser((id, done) => {
   User.findById(id).then((user) => {
      done(null, user)
   })
})
 */

passport.serializeUser((user, done) => {
   done(null, user);
 });
 
 passport.deserializeUser((user, done) => {
   done(null, user);
 });

passport.use(
   new GoogleStrategy({
      //Options for Google strat
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: 'http://localhost:3001/auth/google/callback'

   }, (accessToken, refreshToken, profile, done) => {

      console.log("Passport Callback")
			var userData = {
				name: profile.displayName,
			};
			done(null, userData);
      //Check if user exists in db
     /*  User.findOne({googleID: profile.id}).then((currentUser)=>{
         if (currentUser){
            //Already have user
            console.log('user is: ' + currentUser)
            done(null, currentUser)

         } else{
            //If not, create new user in db
            new User ({
               username: profile.displayName,
               googleID: profile.id
            }).save().then((newUser) => {
               console.log('new user created: ' + newUser)
               done(null, newUser)
            })
         }
      }) */
   })
)