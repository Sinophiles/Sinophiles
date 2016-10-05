
// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('accueil/index');
});

// about page 
app.get('/cours', function(req, res) {
    res.render('cours/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('about/index');
});

app.listen(8080);
console.log('8080 is the magic port');