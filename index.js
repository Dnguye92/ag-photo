var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/'));

app.get('/', function(require, response) {
	response.render('/index');
});

app.listen(app.get('port'), function() {
	console.log('App is running on port', app.get('port'));
});
