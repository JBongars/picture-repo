/**
 * Title:   Included packages for Angular
 * Author:  Julien Bongars
 * Date:    28/8/2017
 */

(function (){
    angular
        .module("pictureRepoApp", [
            "ngFileUpload",
            "ui.router",
            "ngProgress",
            "ngMessages",
            "data-table"
        ]);
})();