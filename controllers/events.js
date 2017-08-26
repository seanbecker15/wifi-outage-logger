

/**
* GET /
*/
exports.onSubmit = function(req, res) {
  //console.log(req.body.btn);
  record(req.body.btn);
  // TODO: Call record function and error check 
  res.render('success');
};

function record(access_point) {
  const { Client } = require('pg');
  const client = new Client({
    host: process.env.host,
    port: 5432,
    user: process.env.user,
    database: process.env.database
  });
  client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack);
    } else {
      console.log('connected');
    }
  });
  var queryText = 'INSERT INTO wifi(access_point, date_and_time) VALUES($1, $2)';
  client.query(queryText, [access_point,'now'], (err, res) => {
    if (err) throw err;
    console.log('res');
    client.end();
  });
}