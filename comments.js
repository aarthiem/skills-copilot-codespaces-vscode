// create web server and listen to port 3000
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// create route for /comments
app.get('/comments', (req, res) => {
  res.send('This is a route for /comments');
});

// create route for /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send(`This is a route for /comments/${req.params.id}`);
});

// create route for /comments/new
app.get('/comments/new', (req, res) => {
    res.send('This is a route for /comments/new');
    });




