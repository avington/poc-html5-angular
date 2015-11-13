///<reference path="./../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../../typings/lodash/lodash.d.ts"/>
///<reference path="./../../common/services/user.service.ts"/>
/**
 * Created by smoseley on 11/5/2015.
 */

module Courses {


    export interface ICourse {
        courseCode: string;
        courseName: string;
        courseDesc: string;
        courseType: string;
        hours: number;
        credits: string;
        locationState: string;
    }

    export interface ICoursesService {
        getAllUserCourses: (user:Common.IUser) => angular.IPromise<ICourse[]>;
        getCourse: (code:string) => angular.IPromise<ICourse>;
    }

    const courses:ICourse[] = [
        {courseCode: "eng100", courseName: 'English 100', courseType: 'Instructor', hours: 3, credits: '3', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!'},
        {courseCode: "eng101", courseName: 'English 101', courseType: 'Instructor', hours: 3, credits: '2', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!'},
        {courseCode: "eng102", courseName: 'English 102', courseType: 'Instructor', hours: 3, credits: '3', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!'},
        {courseCode: "eng112", courseName: 'English 112', courseType: 'Instructor', hours: 3, credits: '2', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!'},
        {courseCode: "eng300", courseName: 'English 300', courseType: 'Instructor', hours: 3, credits: '3', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!'},
        {courseCode: "eng400", courseName: 'English 400', courseType: 'Instructor', hours: 3, credits: '4', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!'},
        {courseCode: "mth100", courseName: 'Math 100', courseType: 'Instructor', hours: 3, credits: '3', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!'},
        {courseCode: "mth101", courseName: 'Math 101', courseType: 'Instructor', hours: 3, credits: '1', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!'},
        {courseCode: "mth200", courseName: 'Math 200', courseType: 'Instructor', hours: 3, credits: '3', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!'},
        {courseCode: "mth300", courseName: 'Math 300', courseType: 'Instructor', hours: 3, credits: '1', locationState: 'Florida', courseDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque autem ipsa optio quo velit!'},
        /*{courseCode: "mth400", courseName: 'Math 400', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "mth444", courseName: 'Math 444', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "bio100", courseName: 'Biology 101', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "csc100", courseName: 'Computer 100', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "csc200", courseName: 'Computer 200', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "csc300", courseName: 'Computer 300', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "geo100", courseName: 'Geology 100', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "geo200", courseName: 'Geology 200', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "his100", courseName: 'History 100', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "his200", courseName: 'History 200', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "lit100", courseName: 'Lit 100', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'},
         {courseCode: "lit200", courseName: 'Lit 200', courseType: 'Instructor', hours: 3, credits: '3 Credits', locationState: 'Florida'}, */
    ];

    class CoursesService implements ICoursesService {




        constructor(private $q:angular.IQService,
                    private $timeout:angular.ITimeoutService,
                    private _: any) {
        }

        getCourse = (code:string) => {
            const defer = this.$q.defer();

            this.$timeout(() => {
                let course = this._.find(courses, {courseCode: code})
                defer.resolve(course);
            }, 500);

            return defer.promise;
        };

        getAllUserCourses = (user:Common.IUser)=> {
            const defer = this.$q.defer();

            this.$timeout(() => {
                defer.resolve(courses)
            }, 500);

            return defer.promise;
        };

    }

    angular
        .module('courses')
        .service('CoursesService', CoursesService);

}


