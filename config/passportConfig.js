import jwtSecret from './jwtConfig';
import bcrypt from 'bcrypt';

const passport = require('passport')

//Strategies
const GoogleStrategy = require('passport-google-oauth20')
const localStrategy = require('passport-local').Strategy
//const User = require('../sequelize')
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

//Other Dependencies
const keys = require('./keys')
const BCRYPT_SALT_ROUNDS = 12;

//Regster User
passport.use(
   'register',
   new localStrategy(
      {
         usernameField: 'username', //UserName
         passwordField: 'password', //Password
         session: false,
      },
      (username, password, done) => { //Pass above info into local stratgey
         try { //Check Database for username
            User.findOne({
               where: {
                  username: username, 
               },
            }).then(user => { 
               if (user != null) { //If Username is already taken 
                  console.log('username already taken');
                  return done(null, false, { message: 'username already taken' });
               } else { //User name is not taken 
                  bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => { //Hash password
                     User.create({ username, password: hashedPassword }).then(user => { //Create user with the hashed password
                        console.log('user created'); 
                        return done(null, user); // note the return needed with passport local - remove this return for passport JWT to work
                     });
                  });
               }
            });
         } catch (err) {
            done(err);
         }
      },
   ),
);

//Login User
passport.use(
   'login',
   new localStrategy(
      {
         usernameField: 'username',
         passwordField: 'password',
         session: false,
      },
      (username, password, done) => {
         try { //Try to find matching username
            User.findOne({
               where: {
                  username: username,
               },
            }).then(user => { //If no matching username
               if (user === null) {
                  return done(null, false, { message: 'bad username' });
               } else { //If Matching username
                  bcrypt.compare(password, user.password).then(response => { //Check password
                     if (response !== true) {  //If wrong password
                        console.log('passwords do not match');
                        return done(null, false, { message: 'passwords do not match' });
                     }
                     console.log('user found & authenticated'); //If Right password
                     return done(null, user); // note the return needed with passport local - remove this return for passport JWT
                  });
               }
            });
         } catch (err) {
            done(err);
         }
      },
   ),
);

const opts = {
   jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
   secretOrKey: jwtSecret.secret,
};

//If using JSON Web Token
passport.use(
   'jwt',
   new JWTstrategy(opts, (jwt_payload, done) => {
      try {
         User.findOne({
            where: {
               username: jwt_payload.id,
            },
         }).then(user => {
            if (user) {
               console.log('user found in db in passport');
               // note the return removed with passport JWT - add this return for passport local
               done(null, user);
            } else {
               console.log('user not found in db');
               done(null, false);
            }
         });
      } catch (err) {
         done(err);
      }
   }),
);



/* passport.use(
   new GoogleStrategy({
      //Options for Google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: 'http://localhost:3001/auth/google/callback'

   }, (accessToken, refreshToken, profile, done) => {

      let User = {
         username: profile.displayName,
         googleID: profile.id,
         token: accessToken
      }

      console.log("Passport Callback")
      console.log(profile)
      console.log(User)
      done(null, User)
      //Manage Db User info saving
   })
)
 */
//Archived

/* passport.serializeUser((user, done)=>{
   done(null, user.id)
})

passport.deserializeUser((id, done)=>{
   User.findById(id).then((user)=>{
      done(null, user)
   })
}) */