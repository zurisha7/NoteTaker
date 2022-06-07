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


   //pull up info from JSON
// fs.readFile("./db/notes.json", 'utf8', (err, data) => {
//     if(err) {
//       console.error(err);
//     } else {
      
//     const parsedNotes = JSON.parse(data);
    
//     //add to array
//     const newArray = parsedNotes.notes.push(newNote);

//     // write new array to file
//       fs.writeFile("./db/notes.json", JSON.stringify(newArray), (err) => {
//         if (err) throw err;
//         console.log("note added")
//       })
//     }
//     }
//    )
   
//   const response = {
//     status: 'success',
//     body: newNote,
//   }
  
//   res.json(response);
//   } 
// });

// router.delete()


  module.exports = router;