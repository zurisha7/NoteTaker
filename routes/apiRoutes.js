const express = require('express');
const fs = require('fs');
const path = require('path');
const { notes } = require('../db/notes.json');
const router = require('express').Router();
const { findById, createNewNote } = require('../lib/notesFunc');
const uuid = require('../helpers/uuid');


//get all notes
router.get('/notes', (req, res) => {
    res.json(notes);
  
  });
 //get individual note 
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });
  

   // POST to notes
router.post('/notes', (req, res) => {
  
  //  note to add to json body
  const { title, text } = req.body;

   
  if (title && text ) {
    // make a new variable with new id
    const newNote = {
       title,
      text,
      id: uuid(),
    };
    req.body.id = notes.length.toString();
  
    const note = createNewNote(newNote, notes);
    res.json(note);
        }
  });

 router.delete('/notes/:id', (req, res) => {
    notes.splice("", 1)
    fs.writeFileSync(
      path.join(__dirname, '../db/notes.json'),
      JSON.stringify({ notes}, null, 2)
      );
  
 res.send('deleted');
 });


  module.exports = router;