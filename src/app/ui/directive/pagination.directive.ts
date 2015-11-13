/**
 * Created by smoseley on 11/6/2015.
 */
///<reference path="./../../../../typings/angularjs/angular.d.ts"/>

module Ui {

    export interface IPaging {
        currentPage: number;
        totalRecords: number;
        itemsPerPage: number;
    }

    export interface IPagingScope {
        paging: string;
    }

    class GridPaging implements angular.IDirective {
        restrict: string = 'E';
        scope: IPagingScope = {
            paging: '='
        };
        template: string = `
            <div class="pagination-centered">
              <ul class="pagination">
                <li class="arrow unavailable"><a href="">&laquo;</a></li>
                <li class="current"><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li class="unavailable"><a href="">&hellip;</a></li>
                <li><a href="">12</a></li>
                <li><a href="">13</a></li>
                <li class="arrow"><a href="">&raquo;</a></li>
              </ul>
            </div>
        `
    }

    const directiveFactory = () => {
        return new GridPaging();
    };

    angular
        .module('ui')
        .directive('cmcPaging', directiveFactory);
}
