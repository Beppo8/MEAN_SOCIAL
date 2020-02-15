'use strict'

var express = require('express');
var MessageController = require('../controllers/message');
var api = express.Router();
var md_auth = require('../middlewares/auth');

api.get('/probando-md', md_auth.ensureAuth, MessageController.probando);
api.post('/message', md_auth.ensureAuth, MessageController.saveMessage);
api.get('/my-message/:page?', md_auth.ensureAuth, MessageController.saveMessage);
api.get('/message/:page?', md_auth.ensureAuth, MessageController.getEmittMessage);
api.get('/univiewed-messages', md_auth.ensureAuth, MessageController.getUnviewedMessages);
api.get('/set-viewed-message', md_auth.ensureAuth, MessageController.setViewedMessage);

module.exports = api;