const passportFacebook = require("passport-facebook");
const FacebookStrategy = passportFacebook.Strategy;
const UserModel = require("../models/user");

const config = {
  clientID: process.env.ID_FACEBOOK,
  clientSecret: process.env.SECRET_FACEBOOK,
  callbackURL: "/auth/facebook/callback",
};

const facebookStrategy = new FacebookStrategy(
  config,
  async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
    const user = await UserModel.findOrCreate(
      { facebookId: profile.id },
      (err, user) => {
        return done(err, user);
      }
    );
  }
);

module.exports = facebookStrategy;
