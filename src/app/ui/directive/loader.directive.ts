///<reference path="./../../../../typings/angularjs/angular.d.ts"/>


/**
 * Created by smoseley on 11/5/2015.
 */
module Ui {

    class CmcLoader implements angular.IDirective {
        restrict = 'E';
        template = `
        <div class="loading-panel">
            <div class="loader">Loading...</div>
        </div>

        `
    }

    const directiveFactory = () => {
        return new CmcLoader();
    };

    angular
        .module('ui')
        .directive('cmcLoader', directiveFactory);


}
