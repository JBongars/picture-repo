/**
 * Main application for server side
 */

var express =       require("express");
var bodyParser =    require("body-parser");un

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 console.log(__dirname);
console.log(__dirname + "/../client/");
const NODE_PORT = process.env.NODE_PORT || 3000; //set port num

app.use(express.static(__dirname + "/../client/")); //use default file

app.use(function(req, res){
    console.log("Error: 404");
    res.send("<h1>404</h1><p>Page not found</p>"); //reset this to 404 page
});

app.listen(NODE_PORT, function() {
    console.log("Web App started at " + NODE_PORT);
})


