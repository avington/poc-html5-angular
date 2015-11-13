///<reference path="./../../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../common/services/lookups.service.ts"/>


module Ui {


    export class StatesController {

        states:string[];

        constructor(private LookupService:Common.ILookupsService) {
            const lookups = LookupService.getLookups()
            this.states = lookups.statesProvinces;
        }


    }


    class StatesControl implements angular.IDirective {
        restrict:string = 'E';
        scope:any = {
            states: '=',
            state: '=',
            controlName: '@'
        };
        template:string = `
        <label for="{{controlName}}">Reusable State Control
            <select id="{{controlName}}"
                name="{{state}}"
                ng-model="state"
                ng-options="state for state in vm.states"
                required>
        </select>
        </label>

        `;
        controller:string = 'StatesLookupController';
        controllerAs:string = 'vm';

    }

    const directiveFactory = () => {
        return new StatesControl();
    };

    angular
        .module('ui')
        .controller('StatesLookupController', StatesController)
        .directive('cmcStatesLookup', directiveFactory);
}

