const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.get('/api/number', (req, res) => {
    console.log(req);
    res.send(`234`);
    // res.send( Math.floor((Math.random() * 10) + 1).toString() );
})
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});
// app.post('api/number', (req, res) => {
  //   console.log(req)
  //   res.send( Math.floor((Math.random() * 10) + 1).toString() );
// })

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`));