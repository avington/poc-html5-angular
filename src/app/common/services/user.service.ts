///<reference path="./../../../../typings/angularjs/angular.d.ts"/>

/**
 * Created by smoseley on 11/5/2015.
 */
module Common {

    export interface IUser {
        userName: string;
        password: string;
    }

    export interface IUserService {
        validateUser: (user:IUser) => angular.IPromise<boolean>;
        currentUser: IUser;
    }

    class UserServices implements IUserService {
        currentUser:Common.IUser;


        constructor(private $q:angular.IQService,
                    private $timeout:angular.ITimeoutService) {

        }

        validateUser = (user:IUser)=> {
            const defer = this.$q.defer();

            this.$timeout(() => {
                this.currentUser = user;
                defer.resolve(true);
            }, 500);

            return defer.promise;

        };

    }

    angular.module('common')
        .service('UserService', UserServices)

}



