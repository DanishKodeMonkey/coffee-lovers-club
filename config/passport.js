// Passport stuff
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Users = require('../models/users');

// For sign in, use passport for authentication
passport.use(
    // set up new local strategy using input username and password
    new LocalStrategy(async (username, password, done) => {
        try {
            //Try to:
            // normalise username to lowercase
            const upperCaseUsername = username.toUpperCase();
            // Find user by username
            const user = await Users.findOne({ username: upperCaseUsername });
            // If user is not found, finish with message
            if (!user) {
                return done(null, false, { message: 'Incorrect username' });
            }
            // Use bcrypt to match authenticate password.
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                // passwords do not match!
                return done(null, false, { message: 'Incorrect password.' });
            }
            // Otherwise, pass authentication
            return done(null, user);
            // Anything go wrong ,return error.
        } catch (err) {
            return done(err);
        }
    })
);

// Serialization functions for maintaining login state in session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await Users.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

module.exports = passport;
