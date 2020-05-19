var express = require('express');
var app = express();

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(8080); //listens on port 8080 -> http://localhost:8080/