'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('../middleware/route-guard');
const Publication = require('./../models/publication');

router.get('/', (req, res, next) => {
  Publication.find()
    .sort({ createdAt: -1 })
    // telling mongoose to populate creator property
    // tells it to fetch docs. from the users collection
    // ( since the ref property for creator refers to the User model
    // in the publication schema)
    // and it replaces the values of the publication "creator" propoerties
    // by the respective user documments.
    .populate('creator')

    .then((publications) => {
      //console.log(publications);
      res.render('home', { publications });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.render('private');
});

module.exports = router;
