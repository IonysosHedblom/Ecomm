const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/loginform.html');
});

app.listen(3000, () => {
  console.log('SERVER HAS STARTED ON PORT 3000');
});