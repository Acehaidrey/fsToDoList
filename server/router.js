// take care of get and post stuff
const todoSchema = ('./mongo');

module.exports = function(app) {

  app.post('/api/addtodo', function(req, res) {
    console.log('reqbody: ' + req.body.text);
    var todo = new todoSchema();
    todo.text = req.body.text;
    todo.save(function(err) {
      if (err) throw err;
      console.log('todo sent to db');
    });
  });
}
