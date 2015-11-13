/// <reference path="./../../typings/tsd.d.ts" />
/**
 * Created by smoseley on 11/4/2015.
 */
var App;
(function (App) {
    angular.module('app', [
        'ui.router',
        'mm.foundation',
        'home',
        'common',
        'courses'
    ]);
})(App || (App = {}));
