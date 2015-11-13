///<reference path="./../../../../../typings/angularjs/angular.d.ts"/>
var Ui;
(function (Ui) {
    var SurveyController = (function () {
        function SurveyController() {
        }
        return SurveyController;
    })();
    Ui.SurveyController = SurveyController;
    var SurveyControl = (function () {
        function SurveyControl() {
            this.restrict = 'E';
            this.scope = {
                survey: '='
            };
            this.template = "\n        <div class=row>\n            <div class=\"large-6 columns\">\n                Were you satisfied with the instructor?\n                </div>\n                <div class=\"large-6 columns\">\n                <input type=\"radio\" name=\"strongly-agree\" value=\"1\" id=\"{{controlName}}\" ng-model=\"survey.instructor\"><label for=\"strongly-agree\">Stronly Agree</label>\n                <input type=\"radio\" name=\"agree\" value=\"2\" id=\"{{controlName}}\" ng-model=\"survey.instructor\"><label for=\"agree\">Agree</label>\n                <input type=\"radio\" name=\"disagree\" value=\"3\" id=\"{{controlName}}\"  ng-model=\"survey.instructor\"><label for=\"disagree\">Disagree</label>\n                <input type=\"radio\" name=\"strongly-disagree\" value=\"4\" id=\"{{controlName}}\"  ng-model=\"survey.instructor\"><label for=\"strongly-disagree\">Strongly Disagree</label>\n            </div>\n        </div>\n        <div class=row>\n            <div class=\"large-6 columns\">\n                Were you satisfied with the course material?\n                </div>\n                <div class=\"large-6 columns\">\n                <input type=\"radio\" name=\"strongly-agree\" value=\"1\" id=\"{{controlName}}\" ng-model=\"survey.instructor\"><label for=\"strongly-agree\">Stronly Agree</label>\n                <input type=\"radio\" name=\"agree\" value=\"2\" id=\"{{controlName}}\" ng-model=\"survey.instructor\"><label for=\"agree\">Agree</label>\n                <input type=\"radio\" name=\"disagree\" value=\"3\" id=\"{{controlName}}\"  ng-model=\"survey.instructor\"><label for=\"disagree\">Disagree</label>\n                <input type=\"radio\" name=\"strongly-disagree\" value=\"4\" id=\"{{controlName}}\"  ng-model=\"survey.instructor\"><label for=\"strongly-disagree\">Strongly Disagree</label>\n            </div>\n        </div>\n        <div class=row>\n            <div class=\"large-6 columns\">\n                Were you satisfied with the overall course?\n                </div>\n                <div class=\"large-6 columns\">\n                <input type=\"radio\" name=\"strongly-agree\" value=\"1\" id=\"{{controlName}}\" ng-model=\"survey.instructor\"><label for=\"strongly-agree\">Stronly Agree</label>\n                <input type=\"radio\" name=\"agree\" value=\"2\" id=\"{{controlName}}\" ng-model=\"survey.instructor\"><label for=\"agree\">Agree</label>\n                <input type=\"radio\" name=\"disagree\" value=\"3\" id=\"{{controlName}}\"  ng-model=\"survey.instructor\"><label for=\"disagree\">Disagree</label>\n                <input type=\"radio\" name=\"strongly-disagree\" value=\"4\" id=\"{{controlName}}\"  ng-model=\"survey.instructor\"><label for=\"strongly-disagree\">Strongly Disagree</label>\n            </div>\n        </div>\n        ";
        }
        return SurveyControl;
    })();
    var directiveFactory = function () {
        return new SurveyControl();
    };
    angular
        .module('ui')
        .controller('SurveyController', SurveyController)
        .directive('cmcCourseSurvey', directiveFactory);
})(Ui || (Ui = {}));
