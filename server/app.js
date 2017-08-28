/**
 * Title        :   Main application for server side
 * Author       :   Julien Bongars
 * Date         :   28/8/2017
 * Comments     :   Updated with morgan
 */

"use strict"

var express         =  require("express");
var bodyParser      =  require("body-parser");
var cookieParser    =  require("cookie-parser");
var session         =  require("express-session");
var passport        =  require("passport");
var flash           =  require("connect-flash"); //not sure

//var config          =  require("./config");

var morgan          =  require("morgan");
//var path            =  require("path");
var log4js          =  require("log4js"); //not sure

//Define app as express()
var app = express();

//Use functions
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//To use morgan and log entries - check with Kenneth
var theAppLog = log4js.getLogger();
var theHTTPLog = morgan({
    "format": "default",
    "stream": {
        write: function(str){ theAppLog.debug(str); }
    }
});

//Console logs
console.log(__dirname);
console.log(__dirname + "/../client/");
const NODE_PORT = process.env.NODE_PORT || 3000; //set port num

app.use(express.static(__dirname + "/../client/")); //set default directory

/* Requires authentication - check with Kenneth

//Initialize session
app.use(session({
    secret: "sdkjAIDG13",
    resave: false,
    saveUninitialized: true
}));

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());

*/

require('./apps/routes')(app);

app.listen(NODE_PORT, function() {
    console.log("Web App started at " + NODE_PORT);
});


