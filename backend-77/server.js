const express = require('express');
const cors = require('cors');
const threads = require('./app/newsBlog');
const fileDb = require("./fileDb");

const app = express();
const port = 8000;


app.use(cors());
app.use(express.static('public'));

app.use('/threads', threads);

const run  = async () => {
  await fileDb.init();
  app.listen(port);
};

run().catch(e=> {
  console.error(e)
});