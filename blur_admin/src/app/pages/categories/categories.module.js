/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.categories', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('categories', {
        url: '/categories',
        templateUrl: 'app/pages/categories/categories.html',
        controller: 'CategoriesController as vm',
        title: 'Categories',
        sidebarMeta: {
          icon: 'ion-ios-pricetags-outline',
          order: 0,
        },
      });
    }
})();
