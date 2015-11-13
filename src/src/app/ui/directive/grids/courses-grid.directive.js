///<reference path="./../../../../../typings/angularjs/angular.d.ts"/>
/**
 * Created by smoseley on 11/6/2015.
 */
var Ui;
(function (Ui) {
    var CoursesGrid = (function () {
        function CoursesGrid() {
            this.restrict = 'E';
            this.scope = {
                courses: '='
            };
            this.template = "\n        <div class=\"row\">\n            <div class=\"large-12 columns\">\n                <table width=\"100%\">\n                    <thead>\n                    <tr>\n                        <th width=\"200\">Course Code</th>\n                        <th>Course Name</th>\n                        <th width=\"150\">Course Type</th>\n                        <th width=\"150\">Hours</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr ng-repeat=\"course in vm.courses track by $index\">\n                        <td><a ui-sref='basic.course({code: course.courseCode})'>{{course.courseCode}}</a> </td>\n                        <td>{{course.courseName}}</td>\n                        <td>{{course.courseType}}</td>\n                        <td>{{course.hours}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n                <div class=\"large-12 columns\">\n                    <cmc-paging></cmc-paging>\n                </div>\n\n            </div>\n        </div>\n        ";
            this.controller = 'CourseListController';
            this.controllerAs = 'vm';
        }
        return CoursesGrid;
    })();
    var directiveFactory = function () {
        return new CoursesGrid();
    };
    angular
        .module('ui')
        .directive('cmcCoursesGrid', directiveFactory);
})(Ui || (Ui = {}));
