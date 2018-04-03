/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.users',
    'BlurAdmin.pages.categories'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'user/login',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'manager/reg.html',
        blank: true
      }, {
        title: '404 Page',
        fixedHref: 'manager/404.html',
        blank: true
      }]
    });
  }

})();
