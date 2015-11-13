///<reference path="./../../../../typings/angularjs/angular.d.ts"/>
var Common;
(function (Common) {
    var LookupsService = (function () {
        function LookupsService() {
        }
        LookupsService.prototype.getLookups = function () {
            return {
                minSec: [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
                    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
                    53, 54, 55, 56, 57, 58, 59
                ],
                percent: [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
                    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
                    53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
                    66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
                    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
                    92, 93, 94, 95, 96, 97, 98, 99, 100
                ],
                hours: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24
                ],
                distanceTypes: ['Miles', 'Kilometers', 'Yards', 'Meters'],
                statesProvinces: [
                    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
                    'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia',
                    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
                    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
                    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                    'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
                    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland',
                    'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec',
                    'Saskatchewan', 'Yukon'
                ],
                countries: ['United States', 'Canada'],
                gender: ['Male', 'Female'],
                ranges: [
                    { val: 0, name: 'Distance Range' },
                    { val: 10, name: '10 Miles' },
                    { val: 25, name: '25 Miles' },
                    { val: 50, name: '50 Miles' },
                    { val: 100, name: '100 Miles' },
                    { val: 200, name: '200 Miles' }
                ]
            };
        };
        return LookupsService;
    })();
    function factory() {
        return new LookupsService();
    }
    angular.module('common')
        .factory('LookupService', factory);
})(Common || (Common = {}));
//# sourceMappingURL=lookups.service.js.map