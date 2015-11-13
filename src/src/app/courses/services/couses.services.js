///<reference path="./../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../../typings/lodash/lodash.d.ts"/>
///<reference path="./../../common/services/user.service.ts"/>
/**
 * Created by smoseley on 11/5/2015.
 */
var Courses;
(function (Courses) {
    var courses = [
        { courseCode: "eng100", courseName: 'English 100', courseType: 'Instructor', hours: 3, credits: '3', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!' },
        { courseCode: "eng101", courseName: 'English 101', courseType: 'Instructor', hours: 3, credits: '2', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!' },
        { courseCode: "eng102", courseName: 'English 102', courseType: 'Instructor', hours: 3, credits: '3', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!' },
        { courseCode: "eng112", courseName: 'English 112', courseType: 'Instructor', hours: 3, credits: '2', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!' },
        { courseCode: "eng300", courseName: 'English 300', courseType: 'Instructor', hours: 3, credits: '3', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!' },
        { courseCode: "eng400", courseName: 'English 400', courseType: 'Instructor', hours: 3, credits: '4', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!' },
        { courseCode: "mth100", courseName: 'Math 100', courseType: 'Instructor', hours: 3, credits: '3', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!' },
        { courseCode: "mth101", courseName: 'Math 101', courseType: 'Instructor', hours: 3, credits: '1', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!' },
        { courseCode: "mth200", courseName: 'Math 200', courseType: 'Instructor', hours: 3, credits: '3', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!' },
        { courseCode: "mth300", courseName: 'Math 300', courseType: 'Instructor', hours: 3, credits: '1', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!' },
    ];
    var CoursesService = (function () {
        function CoursesService($q, $timeout, _) {
            var _this = this;
            this.$q = $q;
            this.$timeout = $timeout;
            this._ = _;
            this.getCourse = function (code) {
                var defer = _this.$q.defer();
                _this.$timeout(function () {
                    var course = _this._.find(courses, { courseCode: code });
                    defer.resolve(course);
                }, 500);
                return defer.promise;
            };
            this.getAllUserCourses = function (user) {
                var defer = _this.$q.defer();
                _this.$timeout(function () {
                    defer.resolve(courses);
                }, 500);
                return defer.promise;
            };
        }
        return CoursesService;
    })();
    angular
        .module('courses')
        .service('CoursesService', CoursesService);
})(Courses || (Courses = {}));
