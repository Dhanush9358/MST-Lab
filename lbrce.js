var express = require('express')
var app = express()
 // route that gets executed for GET request and the request url path '/' or root
app.get('/', function (req, res) {
   res.send('Welcome to LBRCE')
})
// route that gets executed for GET request and the request url path '/cse/'
app.get('/cse/', function (req, res) {
   res.send('Welcome to CSE Department')
})
 // route that gets executed for GET request and the request url path '/it/'
app.get('/it/', function (req, res) {
   res.send('Welcome to IT Department')
})
 // route that gets executed for GET request and the request url path '/ece/'
app.get('/ece/', function (req, res) {
   res.send('Welcome to ECE Department')
})
// route that gets executed for GET request and the request url path '/eee/'
app.get('/eee/', function (req, res) {
   res.send('Welcome to EEE Department')
})
 // route that gets executed for GET request and the request url path '/mech/'
app.get('/mech/', function (req, res) {
   res.send('Welcome to Mechanical Department')
})
 // route that gets executed for GET request and the request url path '/civil/'
app.get('/civil/', function (req, res) {
   res.send('Welcome to CIVIL Department')
})
// route that gets executed for GET request and the request url path '/aero/'
app.get('/aero/', function (req, res) {
   res.send('Welcome to AEROSPACE Department')
})
// start the server
var server = app.listen(7000, function(){
    console.log('Listening on port 7000...')
})
