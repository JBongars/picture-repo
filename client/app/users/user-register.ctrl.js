/**
 * Registration Controller for js
 */

(function(){
    "use strict";
    var app = angular.module("RegistrationApp", []);

    app.controller("RegistrationCtrl", ["$http", RegistrationCtrl]);

    function RegistrationCtrl($http){
        var self = this; //vm
    }
})