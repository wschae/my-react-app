const express = require("express");
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
//app.use(express.urlencoded())
app.use(express.json())
app.use(cors());

var like = 0;
var dislike = 0;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// app.get("/", (req, res) => {
//   res.send('Hello, World');
// });

app.get("/api/status", (req, res) => {
  res.json({like: like, dislike: dislike});
});

// post"
app.post('/api/like', (req, res) => {
  like = like + 1;
  console.log("body:" + JSON.stringify(req.body));
  res.json({like: like, dislike: dislike});
});

app.post("/api/dislike", (req, res) => {
  dislike = dislike + 1;
  res.json({like: like, dislike: dislike});
});

app.get('*', function(req, res){
  res.status(404).send('404 - What?');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});