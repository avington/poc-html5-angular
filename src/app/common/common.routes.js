///<reference path="./../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../typings/angular-ui-router/angular-ui-router.d.ts"/>
///<reference path="./../common/interfaces/IState.ts"/>
/**
 * Created by smoseley on 11/5/2015.
 */
var Common;
(function (Common) {
    var getStates = function () {
        var states = [
            {
                state: 'basic.404',
                config: {
                    url: '/404',
                    views: {
                        'nav@basic': {
                            templateUrl: '/src/app/common/templates/main-nav.html'
                        },
                        'body@basic': {
                            templateUrl: '/src/app/common/templates/404.html'
                        }
                    }
                }
            }
        ];
        return states;
    };
    var configureRoutes = function ($stateProvider, $urlRouterProvider) {
        var otherwise = '/';
        $urlRouterProvider.otherwise('/');
        var states = getStates();
        states.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
    };
    var setRootScope = function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    };
    angular
        .module('common')
        .config(configureRoutes)
        .run(setRootScope);
})(Common || (Common = {}));
//# sourceMappingURL=common.routes.js.map