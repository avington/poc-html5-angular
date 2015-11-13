///<reference path="./../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../services/couses.services.ts"/>
///<reference path="./../../common/services/user.service.ts"/>
///<reference path="./../../ui/directive/pagination.directive.ts"/>



/**
 * Created by smoseley on 11/5/2015.
 */

module Courses {

    export interface ICourseListController {
        loadCourses: () => void;
        currentUser: Common.IUser;
        courses: Courses.ICourse[];
        paging: Ui.IPaging
    }

    class CourseListController implements ICourseListController {
        paging:Ui.IPaging;
        courses:Courses.ICourse[];
        currentUser:Common.IUser;
        private handleSuccess = (response) => {
            this.courses = response;
        };


        constructor(private CoursesService:Courses.ICoursesService,
                    private UserService:Common.IUserService,
        private $rootScope: any) {

            this.currentUser = UserService.currentUser;
            this.loadCourses();

        }

        loadCourses = () => {
            this.CoursesService.getAllUserCourses(this.currentUser)
            .then(this.handleSuccess)
        };



    }


    angular
        .module('courses')
        .controller('CourseListController', CourseListController);
}
