/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.users', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'app/pages/users/users.html',
        title: 'User',
        sidebarMeta: {
          icon: 'ion-person-stalker',
          order: 0,
        },
      });
    }
})();
