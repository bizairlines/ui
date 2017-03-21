;(function() {
    'use strict';

    angular
        .module('autocomplete')
        .factory('autocompleteService', autocompleteService);

    /* ngInject */
    function autocompleteService($http, EnvConstants) {
        return {
            get: get,
            loadList: loadList
        };

        function get(endPoint, search) {
            return $http.get(EnvConstants.apiUrl + endPoint, {params: {s: search}});
        }

        function loadList(endPoint) {
            return $http.get(EnvConstants.apiUrl + endPoint);
        }
    }
})();