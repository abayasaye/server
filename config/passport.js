const keys = require("./keys");
// const usersModel = require("../models/users-model");
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
options = {
  secretOrKey:keys.secretKey,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
},
  (module.exports = passport =
    (passport) => {
      passport.use(
        new jwtStrategy(options, (jwt_payload, done) => {
          usersModel
            .findById(jwt_payload.id)
            .then((user) => {
              console.log("user found");
              return done(null , false);
            })
            .catch((error) => {
                console.log(error)
                return done(error)
            });
        })
      );
    });
