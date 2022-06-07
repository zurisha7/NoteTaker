const express = require('express')
const path = require("path");
const router = require("express").Router();
const apiRoutes = require('./apiRoutes');
const fs = require('fs');


// route to notes.js
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;