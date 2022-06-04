const express=require('express');
const { notes } = require('../db/db.json');
const html = require('./htmlRoutes');
const router = express.Router();

//get all notes
router.get('/api/notes', (req, res) => {
    res.json(notes);
  });
 // get individual note 
router.get('/api/notes/:id', (req, res) => {
    const result = (req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
router.post('/api/notes', (req, res) => {
  //route to post with new id 
    req.body.id = notes.length.toString();
  });

  module.exports = router;