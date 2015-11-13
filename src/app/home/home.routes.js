/// <reference path="./../../../typings/tsd.d.ts" />
/// <reference path="./../common/interfaces/IState.ts" />
/**
 * Created by smoseley on 11/4/2015.
 */
var Home;
(function (Home) {
    var getStates = function () {
        var states = [
            {
                state: 'basic',
                config: {
                    abstract: true,
                    templateUrl: '/src/app/common/templates/basic-layout.html'
                }
            },
            {
                state: 'basic.landing',
                config: {
                    url: '/',
                    views: {
                        'nav@basic': {
                            templateUrl: '/src/app/common/templates/main-nav.html'
                        },
                        'body@basic': {
                            templateUrl: '/src/app/home/templates/landing.html',
                            controller: 'LandingController as vm'
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
        .module('home')
        .config(configureStates);
})(Home || (Home = {}));
//# sourceMappingURL=home.routes.js.map