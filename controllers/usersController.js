const Users = require('../models/users');
const asyncHandler = require('express-async-handler');

// Password stuff
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// sign up form GET
exports.sign_up_get = asyncHandler(async (req, res, next) => {
    res.render('sign-up-form', { title: 'User sign up' });
});

// sign up form POST
exports.sign_up_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: user sign up POST');
});

// sign in form GET
exports.sign_in_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: User sign in GET');
});

// sign in form POST
exports.sign_in_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: User sign in POST');
});
