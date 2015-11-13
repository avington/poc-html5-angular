///<reference path="./../../../../typings/angularjs/angular.d.ts"/>
/**
 * Created by smoseley on 11/5/2015.
 */
var Common;
(function (Common) {
    var UserServices = (function () {
        function UserServices($q, $timeout) {
            var _this = this;
            this.$q = $q;
            this.$timeout = $timeout;
            this.validateUser = function (user) {
                var defer = _this.$q.defer();
                _this.$timeout(function () {
                    _this.currentUser = user;
                    defer.resolve(true);
                }, 500);
                return defer.promise;
            };
        }
        return UserServices;
    })();
    angular.module('common')
        .service('UserService', UserServices);
})(Common || (Common = {}));
