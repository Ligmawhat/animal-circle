const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:"704780611601-5a6mqenppc1okpe285dl3s7kiod67mm5.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL: "http://localhost:3000/user/google/redirect",
        passReqToCallback   : true
    }, (accessToken, refreshToken, profile, done) => {
      console.log(profile, 'PROFILE')
    }
    // console.log
    // function(request, accessToken, refreshToken, profile, done) {
    //         return done(null, profile);
    // }
));