///<reference path="./../../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../common/services/lookups.service.ts"/>
var Ui;
(function (Ui) {
    var CourseTypeController = (function () {
        function CourseTypeController() {
        }
        return CourseTypeController;
    })();
    Ui.CourseTypeController = CourseTypeController;
    var CourseTypeControl = (function () {
        function CourseTypeControl() {
            this.restrict = 'E';
            this.scope = {
                courseType: '=',
                controlName: '@'
            };
            this.template = "\n            <label>Class Type</label>\n            <input type=\"radio\" name=\"instructor\" value=\"Instructor\" id=\"{{controlName}}\" ng-model=\"courseType\"><label for=\"instructor\">Instructor</label>\n            <input type=\"radio\" name=\"online\" value=\"Online\" id=\"{{controlName}}\" ng-model=\"courseType\"><label for=\"online\">Online</label>\n            <input type=\"radio\" name=\"self\" value=\"Self\" id=\"{{controlName}}\"  ng-model=\"courseType\"><label for=\"self\">Self Paced</label>\n        ";
            this.controller = 'CourseTypeController';
            this.controllerAs = 'vm';
        }
        return CourseTypeControl;
    })();
    var directiveFactory = function () {
        return new CourseTypeControl();
    };
    angular
        .module('ui')
        .controller('CourseTypeController', CourseTypeController)
        .directive('cmcCourseTypeRadio', directiveFactory);
})(Ui || (Ui = {}));
//# sourceMappingURL=course-type.control.directive.js.map