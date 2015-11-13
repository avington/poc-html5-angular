///<reference path="./../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../services/couses.services.ts"/>
/**
 * Created by smoseley on 11/6/2015.
 */
var Ui;
(function (Ui) {
    var CourseDetail = (function () {
        function CourseDetail(CoursesService, $rootScope) {
            var _this = this;
            this.CoursesService = CoursesService;
            this.$rootScope = $rootScope;
            this.returnToList = function () {
                _this.$rootScope.$state.go('basic.courses');
            };
            var code = $rootScope.$stateParams.code || '';
            CoursesService.getCourse(code)
                .then(function (response) {
                _this.course = response;
            });
        }
        return CourseDetail;
    })();
    angular
        .module('courses')
        .controller("CourseDetailController", CourseDetail);
})(Ui || (Ui = {}));
//# sourceMappingURL=course-detail.controller.js.map