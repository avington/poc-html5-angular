///<reference path="./../../../../typings/angularjs/angular.d.ts"/>
/**
 * Created by smoseley on 11/5/2015.
 */
var Ui;
(function (Ui) {
    var CmcLoader = (function () {
        function CmcLoader() {
            this.restrict = 'E';
            this.template = "\n        <div class=\"loading-panel\">\n            <div class=\"loader\">Loading...</div>\n        </div>\n\n        ";
        }
        return CmcLoader;
    })();
    var directiveFactory = function () {
        return new CmcLoader();
    };
    angular
        .module('ui')
        .directive('cmcLoader', directiveFactory);
})(Ui || (Ui = {}));
//# sourceMappingURL=loader.directive.js.map