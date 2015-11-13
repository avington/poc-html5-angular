///<reference path="./../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../services/couses.services.ts"/>
///<reference path="./../../common/services/user.service.ts"/>
///<reference path="./../../ui/directive/pagination.directive.ts"/>
/**
 * Created by smoseley on 11/5/2015.
 */
var Courses;
(function (Courses) {
    var CourseListController = (function () {
        function CourseListController(CoursesService, UserService, $rootScope) {
            var _this = this;
            this.CoursesService = CoursesService;
            this.UserService = UserService;
            this.$rootScope = $rootScope;
            this.handleSuccess = function (response) {
                _this.courses = response;
            };
            this.loadCourses = function () {
                _this.CoursesService.getAllUserCourses(_this.currentUser)
                    .then(_this.handleSuccess);
            };
            this.currentUser = UserService.currentUser;
            this.loadCourses();
        }
        return CourseListController;
    })();
    angular
        .module('courses')
        .controller('CourseListController', CourseListController);
})(Courses || (Courses = {}));
//# sourceMappingURL=course-list.controller.js.map