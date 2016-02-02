
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
const server = http.Server(app);

server.listen(PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));
console.log('listening on port: ' + PORT);

require('./server/router')(app);
