const express = require('express')
const path = require("path");
const router = require("express").Router();
const uuid = require('../helpers/uuid');
const apiRoutes = require('./apiRoutes');


// route to the root html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// route to notes.js
router.get('./notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../notes.html"));
});

//route to root html to create note with an id
router.post('/', (req, res) => {
   // Fetching user inputs
});


router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../notes.html'));
});


module.exports = router;