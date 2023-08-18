// pass it around

const express = require('express');
const app = express();
const port = 5001;

app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href='http://localhost:5001/98'>Take one down, pass it around</a>`);
  });

  
  app.get("/:bottlenumber", (req, res) => {

  });


  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});