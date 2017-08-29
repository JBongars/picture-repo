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

    app.use(function(req, res) {
        //res.sendFile("../library/3.jpeg");
        res.send("Error: 404");
    });

    console.log("ROUTES LOADED")
}