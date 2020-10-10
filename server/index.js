const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

app.use("/:locationId", express.static(__dirname + '/../client'));

app.get('/reviews/initial/:locationId', (req, res) => {
  axios.get(`http://localhost:1010/reviews/initial/${req.params.locationId}`)
  .then(result => {
    console.log('success');
    res.status(200).send(result.data);
  })
  .catch ( err => res.status(404).send('got results'));
})

app.get('/mosaic/photos/:locationId', (req, res) => {
  axios.get(`http://localhost:1000/mosaic/photos/${req.params.locationId}`)
  .then(result => {
    console.log('success');
    res.status(200).send(result.data);
  })
  .catch ( err => res.status(404).send('got results'));
})

app.get('/book/:locationId', (req, res) => {
  axios.get(`http://localhost:1020/book/${req.params.locationId}`)
  .then(result => {
    console.log('success');
    res.status(200).send(result.data);
  })
  .catch ( err => res.status(404).send('got results'));
})

app.listen(1030, () => {
  console.log("...listening on port 1030")
})