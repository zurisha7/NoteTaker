const express=require('express');
const { notes } = require('../db/db.json');
const html = require('./htmlRoutes');
const router = express.Router();
const uuid = require('../helpers/uuid');
const routes = require(router);


router.get('/api/notes', (req, res) => {
    res.json(notes);
  });
  
router.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
router.post('/api/notes', (req, res) => {
  // set id based on what next index of array will be
    req.body.id = notes.length.toString();
  });


  module.exports = router;