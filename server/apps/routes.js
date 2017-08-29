/**
 * Title        :   Routing Application for server side
 * Author       :   Julien Bongars
 * Date         :   28/8/2017
 * Comments     :   To be updated with latest routes
 */

"use strict"

var express = require("express");

module.exports = function(app){

    app.get('/register', function(req, res){
        res.status(200).send("Register...");
    });

    app.use(function(req, res){
        console.log("Error: 404");
        res.sendfile("<h1>404</h1><p>Page not found</p>"); //reset this to 404 page
    });

    console.log("ROUTES LOADED")
}