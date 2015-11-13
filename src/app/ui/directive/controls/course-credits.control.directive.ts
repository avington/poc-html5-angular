///<reference path="./../../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../common/services/lookups.service.ts"/>

module Ui {

    export class CourseCreditsController {
        constructor() {

        }

    }

    class CourseCreditControl implements angular.IDirective {
        restrict:string = 'E';
        scope:any = {
            courseCredit: '=',
            controlName: '@'
        };
        template:string = `
            <label>Class Credits</label>
            <input type="radio" name="credit1" value="1" id="{{controlName}}" ng-model="courseCredit"><label for="credit1">1 Credit</label>
            <input type="radio" name="credit2" value="2" id="{{controlName}}" ng-model="courseCredit"><label for="credit2">2 Credits</label>
            <input type="radio" name="credit3" value="3" id="{{controlName}}"  ng-model="courseCredit"><label for="credit3">3 Credits</label>
            <input type="radio" name="credit4" value="4" id="{{controlName}}"  ng-model="courseCredit"><label for="credit4">4 Credits</label>
        `;
        controller:string = 'CourseTypeController';
        controllerAs:string = 'vm';

    }

    const directiveFactory = () => {
        return new CourseCreditControl();
    };

    angular
        .module('ui')
        .controller('CourseTypeController', CourseCreditsController)
        .directive('cmcCourseCreditRadio', directiveFactory);
}