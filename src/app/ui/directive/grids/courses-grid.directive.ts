///<reference path="./../../../../../typings/angularjs/angular.d.ts"/>

/**
 * Created by smoseley on 11/6/2015.
 */
module Ui {

    export interface ICoursesGridScope {
        courses: string;
    }

    class CoursesGrid implements angular.IDirective {
        restrict: string = 'E';
        scope: ICoursesGridScope = {
            courses: '='
        };
        template: string = `
        <div class="row">
            <div class="large-12 columns">
                <table width="100%">
                    <thead>
                    <tr>
                        <th width="200">Course Code</th>
                        <th>Course Name</th>
                        <th width="150">Course Type</th>
                        <th width="150">Hours</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat="course in vm.courses track by $index">
                        <td><a ui-sref='basic.course({code: course.courseCode})'>{{course.courseCode}}</a> </td>
                        <td>{{course.courseName}}</td>
                        <td>{{course.courseType}}</td>
                        <td>{{course.hours}}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="large-12 columns">
                    <cmc-paging></cmc-paging>
                </div>

            </div>
        </div>
        `;
        controller: string = 'CourseListController';
        controllerAs: string = 'vm'
    }

    const directiveFactory = () => {
        return new CoursesGrid();
    };

    angular
        .module('ui')
        .directive('cmcCoursesGrid', directiveFactory);

}