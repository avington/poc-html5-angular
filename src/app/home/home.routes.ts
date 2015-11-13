/// <reference path="./../../../typings/tsd.d.ts" />
/// <reference path="./../common/interfaces/IState.ts" />
/**
 * Created by smoseley on 11/4/2015.
 */


module Home {

    const getStates = () => {
        const states:Common.IState[] = [
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

    const configureStates = (
        $stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider
    ) => {
        const states = getStates();

        states.forEach((state: Common.IState) => {
            $stateProvider.state(state.state, state.config);
        });
    }

    angular
        .module('home')
        .config(configureStates);


}