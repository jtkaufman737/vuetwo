var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var post = require('../models/post.js');

/* GET ALL postS */
router.get('/', function(req, res, next) {
  post.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE post BY ID */
router.get('/:id', function(req, res, next) {
  post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE post */
router.post('/', function(req, res, next) {
  post.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE post */
router.put('/:id', function(req, res, next) {
  post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE post */
router.delete('/:id', function(req, res, next) {
  post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
