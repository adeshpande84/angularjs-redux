'use strict';

var env = require('dotenv').config();
var express = require('express');
var expressStaticGzip = require("express-static-gzip");
var bodyParser = require('body-parser');

var path = require('path');    
var serveStatic = require('serve-static');    

var app = express();

app.use("/", expressStaticGzip("client/dist/"));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


var HOST = process.env.NODE_APP_HOST || '0.0.0.0';
var PORT = process.env.NODE_APP_PORT || 3002;
var COLOR = "\x1b[1m\x1b[35m%s\x1b[0m";

app.listen(PORT, HOST, function() {
    //Set log to a color so I can see out of the corner of my eye that nodemon reset my server
    console.log(COLOR, require('./package.json').name +' running at: ' + HOST + ':' + PORT);
});

app.use(serveStatic(path.join(__dirname, 'client/dist')));