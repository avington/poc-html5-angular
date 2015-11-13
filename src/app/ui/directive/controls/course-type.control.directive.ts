///<reference path="./../../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../common/services/lookups.service.ts"/>

module Ui {

    export class CourseTypeController {
        constructor() {

        }

    }

    class CourseTypeControl implements angular.IDirective {
        restrict:string = 'E';
        scope:any = {
            courseType: '=',
            controlName: '@'
        };
        template:string = `
            <label>Class Type</label>
            <input type="radio" name="instructor" value="Instructor" id="{{controlName}}" ng-model="courseType"><label for="instructor">Instructor</label>
            <input type="radio" name="online" value="Online" id="{{controlName}}" ng-model="courseType"><label for="online">Online</label>
            <input type="radio" name="self" value="Self" id="{{controlName}}"  ng-model="courseType"><label for="self">Self Paced</label>
        `;
        controller:string = 'CourseTypeController';
        controllerAs:string = 'vm';

    }

    const directiveFactory = () => {
        return new CourseTypeControl();
    };

    angular
        .module('ui')
        .controller('CourseTypeController', CourseTypeController)
        .directive('cmcCourseTypeRadio', directiveFactory);
}