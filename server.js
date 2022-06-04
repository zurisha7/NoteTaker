const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const { notes } = require('./db/db.json');

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

app.post('/api/notes', (req, res) => {
// set id based on what next index of array will be
  req.body.id = notes.length.toString();
});

//module.exports = router;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

  