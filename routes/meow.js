const express = require('express');
const Publication = require('./../models/publication.js');
const routeGuard = require('./../middleware/route-guard');
const fileUpload = require('./../middleware/file-upload');
const meowRouter = new express.Router();

// GET - '/meow/create' - Renders meow creation page
meowRouter.get('/create', routeGuard, (req, res) => {
  res.render('meow-create');
});

meowRouter.post(
  '/create',
  routeGuard,
  fileUpload.single('picture'),
  (req, res, next) => {
    //console.log(req.body);
    //console.log(req.file);
    const { message } = req.body;

    let picture;
    if (req.file) {
      picture = req.file.path;
    }

    Publication.create({
      message,
      picture,
      creator: req.user._id
    })
      .then(() => {
        res.redirect('/');
      })
      .catch((error) => {
        next(error);
      });
  }
);

// GET - '/meow/:id' - Loads meow from database, renders single meow page

meowRouter.get('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  Publication.findById(id)
    .populate('creator')
    .then((publication) => {
      res.render('meow-single', { publication });
    })
    .catch((error) => {
      next(error);
    });
});

// GET - '/meow/:id/edit' - Loads meow from database, renders meow edit page
// POST - '/meow/:id/edit' - Handles edit form submission.

// POST - '/meow/:id/delete' - Handles deletion.
meowRouter.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Publication.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = meowRouter;
