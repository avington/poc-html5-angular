///<reference path="./../../../../../typings/angularjs/angular.d.ts"/>
///<reference path="./../../../common/services/lookups.service.ts"/>
var Ui;
(function (Ui) {
    var StatesController = (function () {
        function StatesController(LookupService) {
            this.LookupService = LookupService;
            var lookups = LookupService.getLookups();
            this.states = lookups.statesProvinces;
        }
        return StatesController;
    })();
    Ui.StatesController = StatesController;
    var StatesControl = (function () {
        function StatesControl() {
            this.restrict = 'E';
            this.scope = {
                states: '=',
                state: '=',
                controlName: '@'
            };
            this.template = "\n        <label for=\"{{controlName}}\">Reusable State Control\n            <select id=\"{{controlName}}\"\n                name=\"{{state}}\"\n                ng-model=\"state\"\n                ng-options=\"state for state in vm.states\"\n                required>\n        </select>\n        </label>\n\n        ";
            this.controller = 'StatesLookupController';
            this.controllerAs = 'vm';
        }
        return StatesControl;
    })();
    var directiveFactory = function () {
        return new StatesControl();
    };
    angular
        .module('ui')
        .controller('StatesLookupController', StatesController)
        .directive('cmcStatesLookup', directiveFactory);
})(Ui || (Ui = {}));
//# sourceMappingURL=states.control.directive.js.map