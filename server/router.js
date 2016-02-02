// take care of get and post stuff
const todoSchema = require('./mongo');

module.exports = function(app) {

  app.post('/api/addtodo', function(req, res) {

    var todo = new todoSchema();
    todo.text = req.body.text;
    todo.save(function(err) {
      if (err) throw err;
      console.log('todo sent to db');
    });

  });

  app.get('/api/gettodo', function(req, res) {
    todoSchema.find(function(err, lists) {
      if(err) throw err;
      res.json(lists);
    })
  })
}
