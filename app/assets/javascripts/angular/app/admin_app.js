(function() {
  angular.module('adminApp', ['ngAnimate', 'commonLib', 'ngMessages'])
    .config(['$httpProvider', '$locationProvider', '$qProvider', defaultConfig])
})();
