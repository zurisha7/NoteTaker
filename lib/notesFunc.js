 const fs = require("fs");
 const path = require("path");
 const { notes } = require('../db/notes.json');


function findById(id, notes) {
    const result = notes.filter(note => note.id === id)[0];
    return result;
  }

  function createNewNote(body, notesArray){
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/notes.json'),
      JSON.stringify({ notes: notesArray}, null, 2)
      );
    return note;
  };

 module.exports = { findById, createNewNote };