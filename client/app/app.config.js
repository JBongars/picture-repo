/**
 * Title        :   App Router/ config app
 * Author       :   Julien Bongars
 * Date         :   28/8/2017
 * Comments     :   To be populated at a later date
 */

 
 (function(){
     
    angular
        .module("pictureRepoApp")
        .config(pictureRepoAppConfig);
    
    pictureRepoAppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function pictureRepoAppConfig($stateProvider, $urlRouterProvider)
    {
        $stateProvider
            .state("Foo", {
                url: "/foo",
                views: {
                    "nav": {
                        templateUrl: "../app/protected/foo.html"
                    },
                    "content": {
                        templateUrl: "../app/users/foo.html"
                    }
                },
                resolve: /*optional - check for login*/ {
                    authenticated: function (bar){
                        console.log("bar");
                        console.log(bar.foo);
                        return bar.foo;
                    }
                },
                controller: 'foo',
            });

        $urlRouterProvider.otherwise('/')
    }
 })();