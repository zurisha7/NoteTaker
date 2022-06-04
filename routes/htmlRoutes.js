const express = require('express')
const path = require("path");
const router = require("express").Router();
const uuid = require('../helpers/uuid');

// route to the root html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index"));
});

//route to root html to create note with an id
router.post('/', (req, res) => {
   // Fetching user inputs
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
})

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.js"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, './index'));
});

module.exports = router;