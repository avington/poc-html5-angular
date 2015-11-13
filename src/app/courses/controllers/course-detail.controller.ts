///<reference path="./../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../services/couses.services.ts"/>


/**
 * Created by smoseley on 11/6/2015.
 */
module Ui {

    import ICourse = Courses.ICourse;
    export interface ICourseDetail {

    }

    class CourseDetail implements ICourseDetail{
        course : ICourse
        constructor(
            private CoursesService: Courses.ICoursesService,
            private $rootScope: any
        ) {
            const code = $rootScope.$stateParams.code || '';

            CoursesService.getCourse(code)
            .then(response => {
                this.course = response;
            });
        }

        public returnToList = () => {
            this.$rootScope.$state.go('basic.courses');
        }
    }

    angular
    .module('courses')
    .controller("CourseDetailController", CourseDetail);
}