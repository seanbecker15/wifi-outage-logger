/**
* GET /
*/
exports.onSubmit = function(req, res) {
  // TODO: Call record function and error check 
  res.render('success');
};

var date = new Date();
var time;

function record(btn) {
  time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  console.log(time);
  console.log(btn);
}