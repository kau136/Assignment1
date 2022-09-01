const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movie');
const app = express();
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/Movie', movieRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    error: 'bad request',
  })
})

mongoose.connect(process.env.MONGO_URI)
  .then(result => {
    app.listen(3000, () => {
      console.log('<------------START-------------->')
    });
  })
  .catch(err => console.log(err));


