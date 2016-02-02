
var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost:27017/tododb'); //default port for mongodb
var todoSchema = new Mongoose.Schema({ //mongo creates unique identifer
  text: String
});

module.exports = Mongoose.model('List', todoSchema); //list is table name
