/// <reference path="./../../../../typings/tsd.d.ts" />
///<reference path="./../../common/services/user.service.ts"/>
/**
 * Created by smoseley on 11/4/2015.
 */
var Home;
(function (Home) {
    var LandingController = (function () {
        function LandingController(UserService, $rootScope) {
            var _this = this;
            this.UserService = UserService;
            this.$rootScope = $rootScope;
            this.waiting = false;
            this.login = function () {
                _this.waiting = true;
                _this.UserService.validateUser(_this.user)
                    .then(function (response) {
                    _this.waiting = false;
                    _this.$rootScope.$state.go('basic.courses');
                });
            };
            this.user = {
                userName: '',
                password: ''
            };
        }
        return LandingController;
    })();
    angular.module('home')
        .controller('LandingController', LandingController);
})(Home || (Home = {}));
