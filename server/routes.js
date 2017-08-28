/**
 * Title        :   Routing Application for server side
 * Author       :   Julien Bongars
 * Date         :   28/8/2017
 * Comments     :   To be updated with latest routes
 */

"use strict"

var express         =  require("express");
var bodyParser      =  require("body-parser");
var cookieParser    =  require("cookie-parser");
var session         =  require("express-session");
var flash           =  require("connect-flash"); //not sure

var app = express();

app.get('/register', function(req, res){
    res.send("Register...");
});

app.use(function(req, res){
    console.log("Error: 404");
    res.send("<h1>404</h1><p>Page not found</p>"); //reset this to 404 page
});