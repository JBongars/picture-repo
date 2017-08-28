/**
 * Main application for server side
 */
"use strict"

var express      =  require("express");
var bodyParser   =  require("body-parser");
var cookieParser =  require("cookie-parser");

var morgan       =  require("morgan");
var path         =  require("path");

//Define app as express()
var app = express();

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());

//To use cookies
app.use(cookieParser());

//To use morgan
var accessLogStream = fs.createWriteStream(path.join(__dirname, '/../access.log'), {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

//Console logs
console.log(__dirname);
console.log(__dirname + "/../client/");
const NODE_PORT = process.env.NODE_PORT || 3000; //set port num

app.use(express.static(__dirname + "/../client/")); //set default directory



app.use(function(req, res){
    console.log("Error: 404");
    res.send("<h1>404</h1><p>Page not found</p>"); //reset this to 404 page
});

app.listen(NODE_PORT, function() {
    console.log("Web App started at " + NODE_PORT);
})


