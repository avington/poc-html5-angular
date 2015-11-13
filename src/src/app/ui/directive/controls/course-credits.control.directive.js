///<reference path="./../../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../common/services/lookups.service.ts"/>
var Ui;
(function (Ui) {
    var CourseCreditsController = (function () {
        function CourseCreditsController() {
        }
        return CourseCreditsController;
    })();
    Ui.CourseCreditsController = CourseCreditsController;
    var CourseCreditControl = (function () {
        function CourseCreditControl() {
            this.restrict = 'E';
            this.scope = {
                courseCredit: '=',
                controlName: '@'
            };
            this.template = "\n            <label>Class Credits</label>\n            <input type=\"radio\" name=\"credit1\" value=\"1\" id=\"{{controlName}}\" ng-model=\"courseCredit\"><label for=\"credit1\">1 Credit</label>\n            <input type=\"radio\" name=\"credit2\" value=\"2\" id=\"{{controlName}}\" ng-model=\"courseCredit\"><label for=\"credit2\">2 Credits</label>\n            <input type=\"radio\" name=\"credit3\" value=\"3\" id=\"{{controlName}}\"  ng-model=\"courseCredit\"><label for=\"credit3\">3 Credits</label>\n            <input type=\"radio\" name=\"credit4\" value=\"4\" id=\"{{controlName}}\"  ng-model=\"courseCredit\"><label for=\"credit4\">4 Credits</label>\n        ";
            this.controller = 'CourseTypeController';
            this.controllerAs = 'vm';
        }
        return CourseCreditControl;
    })();
    var directiveFactory = function () {
        return new CourseCreditControl();
    };
    angular
        .module('ui')
        .controller('CourseTypeController', CourseCreditsController)
        .directive('cmcCourseCreditRadio', directiveFactory);
})(Ui || (Ui = {}));
