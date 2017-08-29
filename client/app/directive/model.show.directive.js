/**
 * Title        :   Modal show Directive
 * Date         :   29/08/2017
 * Author       :   Julien Bongars | Author Unknown (day20)
 * Comments     :   Use the tag <modal-dialog> to gen a new modal and contents transcluded
 * Updates      :   Test and improve UI (if needed)
 */

(function(){
    
        var app = angular.module("pictureRepoApp");
        
        app.directive("modalDialog", modalDialog);
    
        var modalDialog = function(){
            return {
                restrict: 'E',
                scope: {
                    show: '='
                },
                replace: true, // Replace with the template below
                transclude: true, // we want to insert custom content inside the directive
                link: function(scope, element, attrs) {
                    scope.dialogStyle = {};
                    
                    if (attrs.width)
                        scope.dialogStyle.width = attrs.width;
                    
                    if (attrs.height)
                        scope.dialogStyle.height = attrs.height;
                    
                    scope.hideModal = function() {
                        scope.show = false;
                    };
                },
                template: 
                    "<div class='ng-modal' ng-show='show'>\n" +
                        "<div class='ng-modal-overlay' ng-click='hideModal()'></div>\n" +
                        "<div class='ng-modal-dialog' ng-style='dialogStyle'>\n" +
                            "<span class='ng-modal-title' ng-show='dialogTitle && dialogTitle.length' ng-bind='dialogTitle'></span>\n" +
                            "<div class='ng-modal-close' ng-click='hideModal()'>\n" +
                                "<div ng-bind-html='closeButtonHtml'></div>\n" +
                            "</div>\n" +
                        "<div class='ng-modal-dialog-content' ng-transclude></div>\n" +
                    "</div>\n</div>"
            };
        };
    
})();