const express = require('express');
const { notes } = require('../db/db.json');
const router = require('express').Router();
const { findById, createNewNote } = require('../lib/notesFunc');
const htmlRoutes = require('./htmlRoutes')



//get all notes
router.get('/notes', (req, res) => {
    res.json(notes);
  });
 // get individual note 
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
router.post('/notes', (req, res) => {
  //route to post with new id 
  const { title, text } = req.body;

  const noteId = uuid();
  const parsedId = uuidParse(noteId);
  const stringfyId = uuidStringify(parsedId);
  console.log(`parsedId : ${parsedId}\n`);
  console.log(`StringifyId : ${stringfyId}\n`);
   
// create note id
  repo.create({
    noteId,
    title,
    text
    
  })
  res.send('Information submitted!')

    const result = createNewNote(req.body.id = notes.length.toString());
    console.log(result);
  });


  module.exports = router;