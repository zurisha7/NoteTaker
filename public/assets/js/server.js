const express = require('express');
const notes = require('./public/db/db.json')
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

  