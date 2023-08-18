// pass it around

const express = require('express');
const app = express();
const port = 5001;

app.get("/", (req, res) => {
    res.send();
  });

  
  app.get("/:bottlenumber", (req, res) => {
    
  });


  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});