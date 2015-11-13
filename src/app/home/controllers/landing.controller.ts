/// <reference path="./../../../../typings/tsd.d.ts" />
///<reference path="./../../common/services/user.service.ts"/>


/**
 * Created by smoseley on 11/4/2015.
 */
module Home {

    import IUserService = Common.IUserService;
    export interface ILandingController {
        login: () => void;
        user: Common.IUser;
        waiting: boolean;
    }

    class LandingController implements ILandingController {
        waiting:boolean = false;
        user:Common.IUser;

        constructor(private UserService:Common.IUserService,
                    private $rootScope:any) {
            this.user = {
                userName: '',
                password: ''
            };

        }

        login = () => {
            this.waiting = true;
            this.UserService.validateUser(this.user)
                .then((response) => {
                    this.waiting = false;
                    this.$rootScope.$state.go('basic.courses');
                });
        };



    }

    angular.module('home')
        .controller('LandingController', LandingController)
}
