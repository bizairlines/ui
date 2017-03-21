;(function() {
    'use strict';

    angular
        .module('autocomplete')
        .component('bizAutocomplete', {
            templateUrl: 'shared/autocomplete/autocomplete.tpl.html',
            controller: 'AutocompleteController',
            bindings: {
                model: '=',
                key: '=',
                title: '@',
                for: '@',
                type: '@',
                required: '<'
            }
        });
})();