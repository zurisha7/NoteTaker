const express = require('express');
const { notes } = require('../db/db.json');
const html = require('./htmlRoutes');
const router = require('express').Router();

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}
//get all notes
router.get('/api/notes', (req, res) => {
    res.json(notes);
  });
 // get individual note 
router.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
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