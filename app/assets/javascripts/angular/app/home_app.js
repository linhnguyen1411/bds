(function() {
  angular.module('homeApp', ['ngAnimate', 'commonLib', 'ngMessages'])
    .config(['$httpProvider', '$locationProvider', '$qProvider', defaultConfig])
})();
