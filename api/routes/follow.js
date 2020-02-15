'use strict'

var express = require('express');
var FollowControllers = require('../controllers/follow');
var api = express.Router();
var md_auth = require('../middlewares/auth');

api.post('/follow', md_auth.ensureAuth, FollowControllers.saveFollow);
api.delete('/follow/:id', md_auth.ensureAuth, FollowControllers.deleteFollow);
api.get('/following/:id?/:page?', md_auth.ensureAuth, FollowControllers.getFollowingUsers);
api.get('/followed/:id?/:page?', md_auth.ensureAuth, FollowControllers.getFollowedUsers);
api.get('/get-my-follows/:followed?', md_auth.ensureAuth, FollowControllers.getMyFollows);

module.exports = api;