///<reference path="./../../../../../typings/angularjs/angular.d.ts"/>
module Ui {

    export class SurveyController {

    }

    class SurveyControl implements angular.IDirective {
        restrict:string = 'E';
        scope:any = {
            survey: '='
        }
        template:string = `
        <div class=row>
            <div class="large-6 columns">
                Were you satisfied with the instructor?
                </div>
                <div class="large-6 columns">
                <input type="radio" name="strongly-agree" value="1" id="{{controlName}}" ng-model="survey.instructor"><label for="strongly-agree">Stronly Agree</label>
                <input type="radio" name="agree" value="2" id="{{controlName}}" ng-model="survey.instructor"><label for="agree">Agree</label>
                <input type="radio" name="disagree" value="3" id="{{controlName}}"  ng-model="survey.instructor"><label for="disagree">Disagree</label>
                <input type="radio" name="strongly-disagree" value="4" id="{{controlName}}"  ng-model="survey.instructor"><label for="strongly-disagree">Strongly Disagree</label>
            </div>
        </div>
        <div class=row>
            <div class="large-6 columns">
                Were you satisfied with the course material?
                </div>
                <div class="large-6 columns">
                <input type="radio" name="strongly-agree" value="1" id="{{controlName}}" ng-model="survey.instructor"><label for="strongly-agree">Stronly Agree</label>
                <input type="radio" name="agree" value="2" id="{{controlName}}" ng-model="survey.instructor"><label for="agree">Agree</label>
                <input type="radio" name="disagree" value="3" id="{{controlName}}"  ng-model="survey.instructor"><label for="disagree">Disagree</label>
                <input type="radio" name="strongly-disagree" value="4" id="{{controlName}}"  ng-model="survey.instructor"><label for="strongly-disagree">Strongly Disagree</label>
            </div>
        </div>
        <div class=row>
            <div class="large-6 columns">
                Were you satisfied with the overall course?
                </div>
                <div class="large-6 columns">
                <input type="radio" name="strongly-agree" value="1" id="{{controlName}}" ng-model="survey.instructor"><label for="strongly-agree">Stronly Agree</label>
                <input type="radio" name="agree" value="2" id="{{controlName}}" ng-model="survey.instructor"><label for="agree">Agree</label>
                <input type="radio" name="disagree" value="3" id="{{controlName}}"  ng-model="survey.instructor"><label for="disagree">Disagree</label>
                <input type="radio" name="strongly-disagree" value="4" id="{{controlName}}"  ng-model="survey.instructor"><label for="strongly-disagree">Strongly Disagree</label>
            </div>
        </div>
        `
    }

    const directiveFactory = () => {
        return new SurveyControl();
    }

    angular
        .module('ui')
        .controller('SurveyController', SurveyController)
        .directive('cmcCourseSurvey', directiveFactory);
}
