const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const api = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', api);
app.use('/', htmlRoutes);

//module.exports = r
// app.get('/', (req, res) => {
//   res.send()
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

  