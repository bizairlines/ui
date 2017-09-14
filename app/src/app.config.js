;(function() {
    'use strict';

    angular
        .module('biz.ui')
        .config(config);

    /* ngInject */
    function config($urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
    }
})();