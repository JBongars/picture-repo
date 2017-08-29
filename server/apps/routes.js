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
        res.send(""); //reset this to 404 page
    });

    console.log("ROUTES LOADED")
}