// take care of get and post stuff
const todoSchema = require('./mongo');

module.exports = function(app) {

  app.post('/api/addtodo', function(req, res) {

    var todo = new todoSchema();
    todo.text = req.body.text;
    todo.check = req.body.check;
    todo.save(function(err) {
      if (err) throw err;
      console.log('todo sent to db');
      todoSchema.find(function(err, lists) {
        if(err) throw err;
        res.send(lists);
      });
    });
  });

  app.get('/api/gettodo', function(req, res) {
    todoSchema.find(function(err, lists) {
      if(err) throw err;
      res.send(lists);
    });
  });

  app.put('/api/updatetodo', function(req, res) {
    todoSchema.findOne({ '_id': req.body.id}, function(err, item) {
      if (err) throw err;
      item.check = req.body.check;
      item.text = req.body.text;
      item.save(function(err) {
        if (err) throw err;
        console.log('changes have been made');
      });
    });
  });

  app.delete('/api/deltodo', function(req, res) {
    todoSchema.remove({ '_id': req.body.id}, function(err, item) {
      if (err) throw err;
      console.log('delete successful');
      todoSchema.find(function(err, lists) {
        if(err) throw err;
        res.send(lists);
      });
    });
  });

  app.delete('/api/delalltodo', function(req, res) {
    todoSchema.remove(function(err) {
      if (err) throw err;
      console.log('successful remove db');
      res.send([]);
    });
  });
}
