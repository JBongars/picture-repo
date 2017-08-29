/**
 * Client side code.
 */
(function() {
    var app = angular.module("demoApp", []);

    app.controller("demoAppCtrl", ["$http", demoAppCtrl]);

    function demoAppCtrl($http) {
        
        var self = this; // vm

        self.search = '';
        self.submit = function(){
            console.log("Success!");
            alert('Success!');
        }
        /*
        self.registerUser = function() {
            console.log(self.user.email);
            console.log(self.user.password);
            $http.post("/users", self.user)
                .then(function(result) {
                    console.log(result);
                    self.displayUser.email = result.data.email;
                    self.displayUser.password = result.data.password;
                }).catch(function(e) {
                    console.log(e);
                });
        };
        */
    }

})();