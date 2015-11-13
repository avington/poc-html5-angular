///<reference path="./../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../typings/angular-ui-router/angular-ui-router.d.ts"/>
///<reference path="./../common/interfaces/IState.ts"/>
/**
 * Created by smoseley on 11/5/2015.
 */
var Courses;
(function (Courses) {
    var getStates = function () {
        var states = [
            {
                state: 'basic.courses',
                config: {
                    url: '/courses',
                    views: {
                        'nav@basic': {
                            templateUrl: '/src/app/common/templates/main-nav.html'
                        },
                        'body@basic': {
                            templateUrl: '/src/app/courses/templates/course-list.html',
                            controller: 'CourseListController as vm'
                        }
                    }
                }
            },
            {
                state: 'basic.course',
                config: {
                    url: '/course/{code}',
                    views: {
                        'nav@basic': {
                            templateUrl: '/src/app/common/templates/main-nav.html'
                        },
                        'body@basic': {
                            templateUrl: '/src/app/courses/templates/course-detail.html',
                            controller: 'CourseDetailController as vm'
                        }
                    }
                }
            }
        ];
        return states;
    };
    var configureStates = function ($stateProvider, $urlRouterProvider) {
        var states = getStates();
        states.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
    };
    angular
        .module('courses')
        .config(configureStates);
})(Courses || (Courses = {}));
//# sourceMappingURL=courses.routes.js.map