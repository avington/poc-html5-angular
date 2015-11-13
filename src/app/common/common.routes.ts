///<reference path="./../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../typings/angular-ui-router/angular-ui-router.d.ts"/>
///<reference path="./../common/interfaces/IState.ts"/>

/**
 * Created by smoseley on 11/5/2015.
 */
module Common {

    const getStates = () => {
        const states:Common.IState[] = [
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
        ]

        return states;
    }

    const configureRoutes = ($stateProvider:angular.ui.IStateProvider,
                             $urlRouterProvider:angular.ui.IUrlRouterProvider) => {


        const otherwise = '/';

        $urlRouterProvider.otherwise('/');
        const states = getStates();

        states.forEach((state: Common.IState) => {
            $stateProvider.state(state.state, state.config);
        });

    };

    const setRootScope = ($rootScope: any, $state: angular.ui.IStateService, $stateParams: angular.ui.IStateParamsService) => {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

    angular
        .module('common')
        .config(configureRoutes)
    .run(setRootScope)

}
