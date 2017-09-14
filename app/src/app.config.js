;(function() {
    'use strict';

    angular
        .module('biz..components')
        .config(config);

    /* ngInject */
    function config($urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
    }
})();