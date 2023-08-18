// pass it around

const express = require('express');
const app = express();
const port = 5001;


app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href='http://localhost:5001/98'>Take one down, Pass it around</a>`);
  });

  
  app.get("/:numBottle", (req, res) => {
    const nextNumber = req.params.numBottle - 1;

    if (nextNumber >= 0) {
        res.send(`<h1>${req.params.numBottle} bottle(s) of beer on the wall</h1>
        <a href='http://localhost:5001/${nextNumber}'>Take one down, Pass it around</a>`);
    } else {
      res.send(`<a href=//localhost:5001>Home Page</a>`);
    }
  });


  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});