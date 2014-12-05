var express = require('express');
var path = require('path');

// Setup
var app = express();
app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

// Routes
app.get('/', function(request, response) {
  response.render('index', {
        title: 'Index'
    });
});

app.listen(app.get('port'), function() {
  console.log("App is running at localhost:" + app.get('port'))
});