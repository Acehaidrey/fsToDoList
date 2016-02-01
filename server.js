
const http = require('http');
const express = require('express');
const PORT = 3000;
const app = express();
const server = http.Server(app);
server.listen(PORT);
app.use(express.static(__dirname + '/public'));
console.log('listening on port: ' + PORT);
