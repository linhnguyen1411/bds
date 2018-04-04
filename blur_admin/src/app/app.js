'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'commonLib',
  'smart-table',
  'xeditable',
  'BlurAdmin.theme',
  'BlurAdmin.pages'
]).config(['$httpProvider', '$locationProvider', defaultConfig]);

/*
 * Default config for $http
 * Data Type: json
 * Always send csrf token
*/
function defaultConfig($httpProvider, $locationProvider) {
  var csrfTokenElm = document.getElementsByName('csrf-token'),
      csrfToken = csrfTokenElm[0] ? csrfTokenElm[0].content : '';
  $httpProvider.defaults.headers.common.Accept = 'application/json';
  $httpProvider.defaults.headers.post['X-CSRF-Token'] = csrfToken;
  $httpProvider.defaults.headers.put['X-CSRF-Token'] = csrfToken;
  $httpProvider.defaults.headers.delete = {'X-CSRF-Token': csrfToken};
}
