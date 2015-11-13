/**
 * Created by smoseley on 11/6/2015.
 */
///<reference path="./../../../../typings/angularjs/angular.d.ts"/>
var Ui;
(function (Ui) {
    var GridPaging = (function () {
        function GridPaging() {
            this.restrict = 'E';
            this.scope = {
                paging: '='
            };
            this.template = "\n            <div class=\"pagination-centered\">\n              <ul class=\"pagination\">\n                <li class=\"arrow unavailable\"><a href=\"\">&laquo;</a></li>\n                <li class=\"current\"><a href=\"\">1</a></li>\n                <li><a href=\"\">2</a></li>\n                <li><a href=\"\">3</a></li>\n                <li><a href=\"\">4</a></li>\n                <li class=\"unavailable\"><a href=\"\">&hellip;</a></li>\n                <li><a href=\"\">12</a></li>\n                <li><a href=\"\">13</a></li>\n                <li class=\"arrow\"><a href=\"\">&raquo;</a></li>\n              </ul>\n            </div>\n        ";
        }
        return GridPaging;
    })();
    var directiveFactory = function () {
        return new GridPaging();
    };
    angular
        .module('ui')
        .directive('cmcPaging', directiveFactory);
})(Ui || (Ui = {}));
//# sourceMappingURL=pagination.directive.js.map